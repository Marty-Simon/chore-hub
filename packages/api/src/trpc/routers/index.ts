/**
 * Main app router
 */

import { z } from 'zod';
import { router, publicProcedure, createContext } from '../trpc';

// In-memory state for counter demo
const counterState = { value: 0 };

export const appRouter = router({
  // Health check
  health: publicProcedure.query(() => ({
    status: 'OK',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  })),

  // Hello endpoint
  hello: publicProcedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return {
        greeting: `Hello, ${input.name || 'World'}!`,
        timestamp: new Date().toISOString(),
      };
    }),

  // Echo endpoint
  echo: publicProcedure
    .input(z.object({ message: z.string() }))
    .query(({ input }) => {
      return {
        original: input.message,
        reversed: input.message.split('').reverse().join(''),
        length: input.message.length,
        timestamp: new Date().toISOString(),
      };
    }),

  // In-memory counter
  counter: router({
    get: publicProcedure.query(() => ({ value: counterState.value })),
    increment: publicProcedure.mutation(() => {
      counterState.value += 1;
      return { value: counterState.value };
    }),
    decrement: publicProcedure.mutation(() => {
      counterState.value -= 1;
      return { value: counterState.value };
    }),
    reset: publicProcedure.mutation(() => {
      counterState.value = 0;
      return { value: counterState.value };
    }),
  }),

  // Items CRUD (requires database)
  items: router({
    list: publicProcedure.query(async ({ ctx }) => {
      return await ctx.prisma.item.findMany({ orderBy: { createdAt: 'desc' } });
    }),
    create: publicProcedure
      .input(z.object({ title: z.string(), description: z.string().optional() }))
      .mutation(async ({ ctx, input }) => {
        return await ctx.prisma.item.create({ data: input });
      }),
    toggle: publicProcedure
      .input(z.object({ id: z.string() }))
      .mutation(async ({ ctx, input }) => {
        const item = await ctx.prisma.item.findUnique({ where: { id: input.id } });
        if (!item) throw new Error('Item not found');
        return await ctx.prisma.item.update({
          where: { id: input.id },
          data: { completed: !item.completed },
        });
      }),
    delete: publicProcedure
      .input(z.object({ id: z.string() }))
      .mutation(async ({ ctx, input }) => {
        return await ctx.prisma.item.delete({ where: { id: input.id } });
      }),
    stats: publicProcedure.query(async ({ ctx }) => {
      const items = await ctx.prisma.item.findMany();
      return {
        total: items.length,
        completed: items.filter((i: { completed: boolean }) => i.completed).length,
        pending: items.filter((i: { completed: boolean }) => !i.completed).length,
      };
    }),
  }),
});

export { createContext };
export type AppRouter = typeof appRouter;

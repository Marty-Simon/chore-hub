/**
 * User router - manage household members
 */

import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { createUserSchema, updateUserSchema } from '@chore-hub/database';

export const userRouter = router({
  // Get all users in a household
  listByHousehold: publicProcedure
    .input(z.object({ householdId: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.user.findMany({
        where: { householdId: input.householdId },
        orderBy: { createdAt: 'asc' },
      });
    }),

  // Get a single user by ID
  getById: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: input.id },
        include: {
          household: true,
          assignedChores: {
            where: {
              scheduledDate: {
                gte: new Date(new Date().setHours(0, 0, 0, 0)),
              },
            },
            include: {
              chore: {
                include: {
                  instructions: { orderBy: { stepNumber: 'asc' } },
                },
              },
            },
            orderBy: { scheduledDate: 'asc' },
          },
        },
      });
      if (!user) throw new Error('User not found');
      return user;
    }),

  // Create a new user
  create: publicProcedure
    .input(createUserSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.user.create({
        data: input,
      });
    }),

  // Update a user
  update: publicProcedure
    .input(z.object({ id: z.string().cuid() }).merge(updateUserSchema))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return await ctx.prisma.user.update({
        where: { id },
        data,
      });
    }),

  // Delete a user
  delete: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.user.delete({
        where: { id: input.id },
      });
    }),
});

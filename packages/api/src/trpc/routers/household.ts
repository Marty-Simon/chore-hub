/**
 * Household router - manage households and members
 */

import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { createHouseholdSchema, updateHouseholdSchema } from '@chore-hub/database';

export const householdRouter = router({
  // Get all households
  list: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.household.findMany({
      include: {
        members: true,
        _count: {
          select: { chores: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }),

  // Get a single household by ID
  getById: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const household = await ctx.prisma.household.findUnique({
        where: { id: input.id },
        include: {
          members: true,
          chores: {
            include: {
              instructions: { orderBy: { stepNumber: 'asc' } },
              schedules: {
                where: {
                  scheduledDate: {
                    gte: new Date(new Date().setHours(0, 0, 0, 0)),
                  },
                },
                include: { assignedTo: true },
                orderBy: { scheduledDate: 'asc' },
              },
            },
          },
        },
      });
      if (!household) throw new Error('Household not found');
      return household;
    }),

  // Create a new household
  create: publicProcedure
    .input(createHouseholdSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.household.create({
        data: input,
      });
    }),

  // Update a household
  update: publicProcedure
    .input(z.object({ id: z.string().cuid() }).merge(updateHouseholdSchema))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return await ctx.prisma.household.update({
        where: { id },
        data,
      });
    }),

  // Delete a household
  delete: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.household.delete({
        where: { id: input.id },
      });
    }),
});

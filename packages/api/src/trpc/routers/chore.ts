/**
 * Chore router - manage chore definitions and instructions
 */

import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import {
  createChoreSchema,
  updateChoreSchema,
  createChoreInstructionSchema,
  updateChoreInstructionSchema,
} from '@chore-hub/database';

export const choreRouter = router({
  // Get all chores for a household
  listByHousehold: publicProcedure
    .input(z.object({ householdId: z.string().optional(), userId: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      // If userId is provided, filter out private chores not assigned to the user
      return await ctx.prisma.chore.findMany({
        where: {
          ...(input.householdId ? { householdId: input.householdId } : {}),
          ...(input.userId
            ? {
                OR: [
                  { isPrivate: false },
                  {
                    isPrivate: true,
                    schedules: {
                      some: { assignedToId: input.userId },
                    },
                  },
                ],
              }
            : {}),
        },
        include: {
          instructions: { orderBy: { stepNumber: 'asc' } },
          _count: {
            select: { schedules: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      });
    }),

  // Get a single chore by ID
  getById: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const chore = await ctx.prisma.chore.findUnique({
        where: { id: input.id },
        include: {
          household: true,
          instructions: { orderBy: { stepNumber: 'asc' } },
          schedules: {
            include: { assignedTo: true },
            orderBy: { scheduledDate: 'desc' },
            take: 10,
          },
        },
      });
      if (!chore) throw new Error('Chore not found');
      return chore;
    }),

  // Create a new chore
  create: publicProcedure
    .input(createChoreSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.chore.create({
        data: input,
      });
    }),

  // Update a chore
  update: publicProcedure
    .input(z.object({ id: z.string().cuid() }).merge(updateChoreSchema))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return await ctx.prisma.chore.update({
        where: { id },
        data,
      });
    }),

  // Delete a chore
  delete: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.chore.delete({
        where: { id: input.id },
      });
    }),

  // Chore instructions management
  instructions: router({
    // Add an instruction to a chore
    create: publicProcedure
      .input(createChoreInstructionSchema)
      .mutation(async ({ ctx, input }) => {
        return await ctx.prisma.choreInstruction.create({
          data: input,
        });
      }),

    // Update an instruction
    update: publicProcedure
      .input(z.object({ id: z.string().cuid() }).merge(updateChoreInstructionSchema))
      .mutation(async ({ ctx, input }) => {
        const { id, ...data } = input;
        return await ctx.prisma.choreInstruction.update({
          where: { id },
          data,
        });
      }),

    // Delete an instruction
    delete: publicProcedure
      .input(z.object({ id: z.string().cuid() }))
      .mutation(async ({ ctx, input }) => {
        return await ctx.prisma.choreInstruction.delete({
          where: { id: input.id },
        });
      }),
  }),
});

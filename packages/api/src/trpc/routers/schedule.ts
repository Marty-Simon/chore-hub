/**
 * Schedule router - manage chore scheduling and calendar integration
 */

import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import {
  createChoreScheduleSchema,
  updateChoreScheduleSchema,
  ScheduleStatusSchema,
} from '@chore-hub/database';

export const scheduleRouter = router({
  // Get schedules for a date range
  listByDateRange: publicProcedure
    .input(
      z.object({
        startDate: z.date(),
        endDate: z.date(),
        householdId: z.string().cuid().optional(),
        userId: z.string().cuid().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.choreSchedule.findMany({
        where: {
          scheduledDate: {
            gte: input.startDate,
            lte: input.endDate,
          },
          ...(input.userId ? { assignedToId: input.userId } : {}),
          ...(input.householdId
            ? {
                chore: {
                  householdId: input.householdId,
                },
              }
            : {}),
        },
        include: {
          chore: {
            include: {
              instructions: { orderBy: { stepNumber: 'asc' } },
            },
          },
          assignedTo: true,
        },
        orderBy: { scheduledDate: 'asc' },
      });
    }),

  // Get upcoming schedules for a user
  upcoming: publicProcedure
    .input(z.object({ userId: z.string().cuid(), limit: z.number().int().min(1).max(100).optional() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.choreSchedule.findMany({
        where: {
          assignedToId: input.userId,
          scheduledDate: {
            gte: new Date(),
          },
          status: {
            in: ['PENDING', 'IN_PROGRESS'],
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
        take: input.limit || 20,
      });
    }),

  // Get a single schedule by ID
  getById: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const schedule = await ctx.prisma.choreSchedule.findUnique({
        where: { id: input.id },
        include: {
          chore: {
            include: {
              instructions: { orderBy: { stepNumber: 'asc' } },
            },
          },
          assignedTo: true,
        },
      });
      if (!schedule) throw new Error('Schedule not found');
      return schedule;
    }),

  // Create a new schedule
  create: publicProcedure
    .input(createChoreScheduleSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.choreSchedule.create({
        data: input,
        include: {
          chore: true,
          assignedTo: true,
        },
      });
    }),

  // Update a schedule
  update: publicProcedure
    .input(z.object({ id: z.string().cuid() }).merge(updateChoreScheduleSchema))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return await ctx.prisma.choreSchedule.update({
        where: { id },
        data,
        include: {
          chore: true,
          assignedTo: true,
        },
      });
    }),

  // Mark schedule as completed
  complete: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.choreSchedule.update({
        where: { id: input.id },
        data: {
          status: 'COMPLETED',
          completedAt: new Date(),
        },
        include: {
          chore: true,
          assignedTo: true,
        },
      });
    }),

  // Delete a schedule
  delete: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.choreSchedule.delete({
        where: { id: input.id },
      });
    }),

  // Generate schedules for a chore based on recurrence
  generateForChore: publicProcedure
    .input(
      z.object({
        choreId: z.string().cuid(),
        startDate: z.date(),
        endDate: z.date(),
        assignedToId: z.string().cuid().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const chore = await ctx.prisma.chore.findUnique({
        where: { id: input.choreId },
      });

      if (!chore) throw new Error('Chore not found');

      const schedules = [];
      const currentDate = new Date(input.startDate);
      const endDate = new Date(input.endDate);

      while (currentDate <= endDate) {
        schedules.push({
          choreId: input.choreId,
          assignedToId: input.assignedToId,
          scheduledDate: new Date(currentDate),
        });

        // Increment based on recurrence
        switch (chore.recurrence) {
          case 'DAILY':
            currentDate.setDate(currentDate.getDate() + chore.recurrenceValue);
            break;
          case 'WEEKLY':
            currentDate.setDate(currentDate.getDate() + chore.recurrenceValue * 7);
            break;
          case 'MONTHLY':
            currentDate.setMonth(currentDate.getMonth() + chore.recurrenceValue);
            break;
        }
      }

      // Create all schedules
      const created = await ctx.prisma.choreSchedule.createMany({
        data: schedules,
        skipDuplicates: true,
      });

      return { count: created.count };
    }),
});

/**
 * Calendar router - View chores in calendar format
 */

import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { prisma } from '@chore-hub/database';
import { startOfDay, endOfDay, startOfMonth, endOfMonth } from 'date-fns';

export const calendarRouter = router({
  /**
   * Get chores for a specific date range
   */
  getChoresForRange: publicProcedure
    .input(
      z.object({
        startDate: z.string().or(z.date()).transform((val) => new Date(val)),
        endDate: z.string().or(z.date()).transform((val) => new Date(val)),
        userId: z.string().cuid().optional(), // Filter by user
        householdId: z.string().cuid(),
        viewingUserId: z.string().cuid(), // Who is viewing (for privacy filtering)
      })
    )
    .query(async ({ input }) => {
      const { startDate, endDate, userId, householdId, viewingUserId } = input;

      // Build the where clause
      const whereClause: any = {
        scheduledDate: {
          gte: startOfDay(startDate),
          lte: endOfDay(endDate),
        },
        chore: {
          householdId,
          // Exclude chores that are hidden from viewing user
          hiddenFromUsers: {
            none: {
              userId: viewingUserId,
            },
          },
        },
        // Filter private chores - only show if assigned to viewing user
        OR: [
          {
            chore: {
              isPrivate: false,
            },
          },
          {
            chore: {
              isPrivate: true,
            },
            assignedToId: viewingUserId,
          },
        ],
      };

      // Add user filter if provided
      if (userId) {
        whereClause.assignedToId = userId;
      }

      // Get all chore schedules in the date range
      const schedules = await prisma.choreSchedule.findMany({
        where: whereClause,
        include: {
          chore: {
            select: {
              id: true,
              title: true,
              description: true,
              estimatedMinutes: true,
              scheduledTime: true,
              isPrivate: true,
            },
          },
          assignedTo: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          scheduledDate: 'asc',
        },
      });

      return schedules;
    }),

  /**
   * Get chores for a specific month (calendar view)
   */
  getMonthChores: publicProcedure
    .input(
      z.object({
        year: z.number().int(),
        month: z.number().int().min(0).max(11), // 0-11 (JavaScript month)
        householdId: z.string().cuid(),
        viewingUserId: z.string().cuid(),
        userId: z.string().cuid().optional(), // Filter by specific user
      })
    )
    .query(async ({ input }) => {
      const { year, month, householdId, viewingUserId, userId } = input;
      const date = new Date(year, month, 1);

      const startDate = startOfMonth(date);
      const endDate = endOfMonth(date);

      // Build the where clause
      const whereClause: any = {
        scheduledDate: {
          gte: startDate,
          lte: endDate,
        },
        chore: {
          householdId,
          // Exclude chores that are hidden from viewing user
          hiddenFromUsers: {
            none: {
              userId: viewingUserId,
            },
          },
        },
        // Filter private chores - only show if assigned to viewing user
        OR: [
          {
            chore: {
              isPrivate: false,
            },
          },
          {
            chore: {
              isPrivate: true,
            },
            assignedToId: viewingUserId,
          },
        ],
      };

      // Add user filter if provided
      if (userId) {
        whereClause.assignedToId = userId;
      }

      const schedules = await prisma.choreSchedule.findMany({
        where: whereClause,
        include: {
          chore: {
            select: {
              id: true,
              title: true,
              description: true,
              estimatedMinutes: true,
              scheduledTime: true,
              isPrivate: true,
            },
          },
          assignedTo: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          scheduledDate: 'asc',
        },
      });

      return schedules;
    }),

  /**
   * Get user stats (completed vs outstanding chores)
   */
  getUserStats: publicProcedure
    .input(
      z.object({
        userId: z.string().cuid(),
        householdId: z.string().cuid(),
        startDate: z.string().or(z.date()).transform((val) => new Date(val)).optional(),
        endDate: z.string().or(z.date()).transform((val) => new Date(val)).optional(),
      })
    )
    .query(async ({ input }) => {
      const { userId, householdId, startDate, endDate } = input;

      const dateFilter = startDate && endDate ? {
        scheduledDate: {
          gte: startOfDay(startDate),
          lte: endOfDay(endDate),
        },
      } : {};

      // Get completed chores
      const completed = await prisma.choreSchedule.count({
        where: {
          assignedToId: userId,
          status: 'COMPLETED',
          chore: {
            householdId,
          },
          ...dateFilter,
        },
      });

      // Get outstanding (pending + in progress) chores
      const outstanding = await prisma.choreSchedule.count({
        where: {
          assignedToId: userId,
          status: {
            in: ['PENDING', 'IN_PROGRESS'],
          },
          chore: {
            householdId,
          },
          ...dateFilter,
        },
      });

      // Get overdue chores (past scheduled date and not completed)
      const overdue = await prisma.choreSchedule.count({
        where: {
          assignedToId: userId,
          status: {
            in: ['PENDING', 'IN_PROGRESS'],
          },
          scheduledDate: {
            lt: new Date(),
          },
          chore: {
            householdId,
          },
          ...dateFilter,
        },
      });

      // Get total estimated time for outstanding chores
      const outstandingChores = await prisma.choreSchedule.findMany({
        where: {
          assignedToId: userId,
          status: {
            in: ['PENDING', 'IN_PROGRESS'],
          },
          chore: {
            householdId,
          },
          ...dateFilter,
        },
        include: {
          chore: {
            select: {
              estimatedMinutes: true,
            },
          },
        },
      });

      const totalEstimatedMinutes = outstandingChores.reduce(
        (sum: number, schedule) => sum + (schedule.chore.estimatedMinutes || 0),
        0
      );

      return {
        completed,
        outstanding,
        overdue,
        totalEstimatedMinutes,
      };
    }),

  /**
   * Get all household member stats
   */
  getHouseholdStats: publicProcedure
    .input(
      z.object({
        householdId: z.string().cuid(),
        startDate: z.string().or(z.date()).transform((val) => new Date(val)).optional(),
        endDate: z.string().or(z.date()).transform((val) => new Date(val)).optional(),
      })
    )
    .query(async ({ input }) => {
      const { householdId, startDate, endDate } = input;

      // Get all household members
      const members = await prisma.user.findMany({
        where: {
          householdId,
        },
        select: {
          id: true,
          name: true,
          role: true,
        },
      });

      const dateFilter = startDate && endDate ? {
        scheduledDate: {
          gte: startOfDay(startDate),
          lte: endOfDay(endDate),
        },
      } : {};

      // Get stats for each member
      const memberStats = await Promise.all(
        members.map(async (member: { id: string; name: string; role: string }) => {
          const completed = await prisma.choreSchedule.count({
            where: {
              assignedToId: member.id,
              status: 'COMPLETED',
              chore: {
                householdId,
              },
              ...dateFilter,
            },
          });

          const outstanding = await prisma.choreSchedule.count({
            where: {
              assignedToId: member.id,
              status: {
                in: ['PENDING', 'IN_PROGRESS'],
              },
              chore: {
                householdId,
              },
              ...dateFilter,
            },
          });

          const overdue = await prisma.choreSchedule.count({
            where: {
              assignedToId: member.id,
              status: {
                in: ['PENDING', 'IN_PROGRESS'],
              },
              scheduledDate: {
                lt: new Date(),
              },
              chore: {
                householdId,
              },
              ...dateFilter,
            },
          });

          return {
            user: member,
            stats: {
              completed,
              outstanding,
              overdue,
            },
          };
        })
      );

      return memberStats;
    }),
});

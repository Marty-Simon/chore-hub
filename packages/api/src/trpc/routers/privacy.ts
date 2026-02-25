/**
 * Privacy router - Manage chore visibility and privacy settings
 */

import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { prisma } from '@chore-hub/database';
import {
  chorePrivacyCreateSchema,
  chorePrivacyDeleteSchema,
  updateChorePrivacySchema,
} from '@chore-hub/database';

export const privacyRouter = router({
  /**
   * Hide a chore from a specific user
   */
  hideChoreFromUser: publicProcedure
    .input(chorePrivacyCreateSchema)
    .mutation(async ({ input }) => {
      const { choreId, userId } = input;

      // Check if chore exists and belongs to a household
      const chore = await prisma.chore.findUnique({
        where: { id: choreId },
        select: { householdId: true },
      });

      if (!chore) {
        throw new Error('Chore not found');
      }

      // Check if user is in the same household
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { householdId: true },
      });

      if (!user || user.householdId !== chore.householdId) {
        throw new Error('User not found in the same household');
      }

      // Create or update privacy setting
      const privacy = await prisma.chorePrivacy.upsert({
        where: {
          choreId_userId: {
            choreId,
            userId,
          },
        },
        create: {
          choreId,
          userId,
        },
        update: {},
      });

      return privacy;
    }),

  /**
   * Unhide a chore from a specific user
   */
  unhideChoreFromUser: publicProcedure
    .input(chorePrivacyDeleteSchema)
    .mutation(async ({ input }) => {
      const { choreId, userId } = input;

      await prisma.chorePrivacy.delete({
        where: {
          choreId_userId: {
            choreId,
            userId,
          },
        },
      });

      return { success: true };
    }),

  /**
   * Update all privacy settings for a chore at once
   */
  updateChorePrivacy: publicProcedure
    .input(updateChorePrivacySchema)
    .mutation(async ({ input }) => {
      const { choreId, hiddenFromUserIds } = input;

      // Check if chore exists
      const chore = await prisma.chore.findUnique({
        where: { id: choreId },
        select: { householdId: true },
      });

      if (!chore) {
        throw new Error('Chore not found');
      }

      // Delete all existing privacy settings for this chore
      await prisma.chorePrivacy.deleteMany({
        where: { choreId },
      });

      // Create new privacy settings
      if (hiddenFromUserIds.length > 0) {
        await prisma.chorePrivacy.createMany({
          data: hiddenFromUserIds.map((userId: string) => ({
            choreId,
            userId,
          })),
          skipDuplicates: true,
        });
      }

      return { success: true };
    }),

  /**
   * Get all users a chore is hidden from
   */
  getChorePrivacySettings: publicProcedure
    .input(z.object({ choreId: z.string().cuid() }))
    .query(async ({ input }) => {
      const { choreId } = input;

      const privacySettings = await prisma.chorePrivacy.findMany({
        where: { choreId },
        select: {
          userId: true,
        },
      });

      return privacySettings.map((p: { userId: string }) => p.userId);
    }),

  /**
   * Check if a user can see a specific chore
   */
  canUserSeeChore: publicProcedure
    .input(
      z.object({
        choreId: z.string().cuid(),
        userId: z.string().cuid(),
      })
    )
    .query(async ({ input }) => {
      const { choreId, userId } = input;

      // Get the chore with privacy settings
      const chore = await prisma.chore.findUnique({
        where: { id: choreId },
        include: {
          hiddenFromUsers: {
            where: {
              userId,
            },
          },
          schedules: {
            where: {
              assignedToId: userId,
            },
            take: 1,
          },
        },
      });

      if (!chore) {
        return false;
      }

      // If chore is hidden from this user
      if (chore.hiddenFromUsers.length > 0) {
        return false;
      }

      // If chore is private, user can only see if it's assigned to them
      if (chore.isPrivate && chore.schedules.length === 0) {
        return false;
      }

      return true;
    }),

  /**
   * Get all household members for privacy selection
   */
  getHouseholdMembersForPrivacy: publicProcedure
    .input(
      z.object({
        householdId: z.string().cuid(),
        excludeUserId: z.string().cuid().optional(), // Exclude the chore creator
      })
    )
    .query(async ({ input }) => {
      const { householdId, excludeUserId } = input;

      const members = await prisma.user.findMany({
        where: {
          householdId,
          ...(excludeUserId && { id: { not: excludeUserId } }),
        },
        select: {
          id: true,
          name: true,
          role: true,
        },
        orderBy: {
          name: 'asc',
        },
      });

      return members;
    }),
});

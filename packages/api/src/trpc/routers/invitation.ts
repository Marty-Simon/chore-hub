/**
 * Invitation router - manage household member invitations
 */

import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { createInvitationSchema, acceptInvitationSchema, declineInvitationSchema } from '@chore-hub/database';

export const invitationRouter = router({
  // Get all invitations for a household
  listByHousehold: publicProcedure
    .input(z.object({ householdId: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.householdInvitation.findMany({
        where: { householdId: input.householdId },
        include: {
          inviter: { select: { id: true, name: true, email: true } },
          invitee: { select: { id: true, name: true, email: true } },
        },
        orderBy: { createdAt: 'desc' },
      });
    }),

  // Get invitation by token
  getByToken: publicProcedure
    .input(z.object({ token: z.string() }))
    .query(async ({ ctx, input }) => {
      const invitation = await ctx.prisma.householdInvitation.findUnique({
        where: { token: input.token },
        include: {
          household: true,
          inviter: { select: { id: true, name: true, email: true } },
        },
      });

      if (!invitation) {
        throw new Error('Invitation not found');
      }

      // Check if expired
      if (invitation.expiresAt < new Date()) {
        await ctx.prisma.householdInvitation.update({
          where: { id: invitation.id },
          data: { status: 'EXPIRED' },
        });
        throw new Error('Invitation has expired');
      }

      return invitation;
    }),

  // Create a new invitation
  create: publicProcedure
    .input(createInvitationSchema)
    .mutation(async ({ ctx, input }) => {
      // Set expiration to 7 days from now
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7);

      const invitation = await ctx.prisma.householdInvitation.create({
        data: {
          ...input,
          expiresAt,
        },
        include: {
          household: true,
          inviter: { select: { id: true, name: true, email: true } },
        },
      });

      // In a real app, you would send an SMS here with the invitation link
      // For now, we'll just return the invitation with the token
      // The client can display the invitation link or token

      return invitation;
    }),

  // Accept an invitation
  accept: publicProcedure
    .input(acceptInvitationSchema)
    .mutation(async ({ ctx, input }) => {
      const invitation = await ctx.prisma.householdInvitation.findUnique({
        where: { token: input.token },
      });

      if (!invitation) {
        throw new Error('Invitation not found');
      }

      if (invitation.status !== 'PENDING') {
        throw new Error(`Invitation is already ${invitation.status.toLowerCase()}`);
      }

      if (invitation.expiresAt < new Date()) {
        await ctx.prisma.householdInvitation.update({
          where: { id: invitation.id },
          data: { status: 'EXPIRED' },
        });
        throw new Error('Invitation has expired');
      }

      // Update user's household
      await ctx.prisma.user.update({
        where: { id: input.userId },
        data: { householdId: invitation.householdId },
      });

      // Update invitation status
      const updatedInvitation = await ctx.prisma.householdInvitation.update({
        where: { id: invitation.id },
        data: {
          status: 'ACCEPTED',
          inviteeId: input.userId,
        },
        include: {
          household: true,
          inviter: { select: { id: true, name: true, email: true } },
          invitee: { select: { id: true, name: true, email: true } },
        },
      });

      return updatedInvitation;
    }),

  // Decline an invitation
  decline: publicProcedure
    .input(declineInvitationSchema)
    .mutation(async ({ ctx, input }) => {
      const invitation = await ctx.prisma.householdInvitation.findUnique({
        where: { token: input.token },
      });

      if (!invitation) {
        throw new Error('Invitation not found');
      }

      if (invitation.status !== 'PENDING') {
        throw new Error(`Invitation is already ${invitation.status.toLowerCase()}`);
      }

      return await ctx.prisma.householdInvitation.update({
        where: { id: invitation.id },
        data: { status: 'DECLINED' },
      });
    }),

  // Resend invitation (regenerate token and extend expiration)
  resend: publicProcedure
    .input(z.object({ invitationId: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      const invitation = await ctx.prisma.householdInvitation.findUnique({
        where: { id: input.invitationId },
      });

      if (!invitation) {
        throw new Error('Invitation not found');
      }

      // Set new expiration to 7 days from now
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7);

      return await ctx.prisma.householdInvitation.update({
        where: { id: input.invitationId },
        data: {
          status: 'PENDING',
          expiresAt,
          // Token will be regenerated automatically by Prisma default
        },
        include: {
          household: true,
          inviter: { select: { id: true, name: true, email: true } },
        },
      });
    }),

  // Delete an invitation
  delete: publicProcedure
    .input(z.object({ invitationId: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.householdInvitation.delete({
        where: { id: input.invitationId },
      });
    }),
});

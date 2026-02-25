/**
 * Database package exports
 */

import 'dotenv/config';
import { PrismaClient } from '../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';

// Prevent multiple instances of Prisma Client in development
declare global {
  var __prisma: PrismaClient | undefined;
}

function createClient(): PrismaClient {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
  return new PrismaClient({ adapter } as any);
}

export const prisma = globalThis.__prisma || createClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = prisma;
}

export { PrismaClient };
export * from '../prisma/generated/client/index.js';
export {
  RecurrenceTypeSchema,
  ScheduleStatusSchema,
  UserRoleSchema,
  InvitationStatusSchema,
  createHouseholdSchema,
  updateHouseholdSchema,
  createUserSchema,
  updateUserSchema,
  createChoreSchema,
  updateChoreSchema,
  createChoreInstructionSchema,
  updateChoreInstructionSchema,
  createChoreScheduleSchema,
  updateChoreScheduleSchema,
  createCalendarConnectionSchema,
  updateCalendarConnectionSchema,
  createInvitationSchema,
  acceptInvitationSchema,
  declineInvitationSchema,
  type CreateHousehold,
  type UpdateHousehold,
  type CreateUser,
  type UpdateUser,
  type CreateChore,
  type UpdateChore,
  type CreateChoreInstruction,
  type UpdateChoreInstruction,
  type CreateChoreSchedule,
  type UpdateChoreSchedule,
  type CreateCalendarConnection,
  type UpdateCalendarConnection,
  type CreateInvitation,
  type AcceptInvitation,
  type DeclineInvitation,
  type UserRole,
  type InvitationStatus,
} from './schemas';

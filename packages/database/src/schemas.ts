/**
 * Zod validation schemas for database models
 */

import { z } from 'zod';

// Enums
export const RecurrenceTypeSchema = z.enum(['DAILY', 'WEEKLY', 'MONTHLY']);
export const ScheduleStatusSchema = z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED', 'SKIPPED']);

// Household schemas
export const createHouseholdSchema = z.object({
  name: z.string().min(1).max(100),
});

export const updateHouseholdSchema = z.object({
  name: z.string().min(1).max(100).optional(),
});

// User schemas
export const createUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  householdId: z.string().cuid(),
});

export const updateUserSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  email: z.string().email().optional(),
});

// Chore schemas
export const createChoreSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(1000).optional(),
  descriptionList: z.array(z.string()).optional(),
  householdId: z.string().cuid(),
  recurrence: RecurrenceTypeSchema,
  recurrenceValue: z.number().int().min(1).max(30),
  selectedWeekdays: z.array(z.number().int().min(0).max(6)).optional(),
  estimatedMinutes: z.number().int().min(1).max(1440).optional(),
  scheduledTime: z.number().int().min(0).max(1439).nullable().optional(),
  isPrivate: z.boolean().optional(),
});

export const updateChoreSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  description: z.string().max(1000).nullable().optional(),
  descriptionList: z.array(z.string()).optional(),
  recurrence: RecurrenceTypeSchema.optional(),
  recurrenceValue: z.number().int().min(1).max(30).optional(),
  selectedWeekdays: z.array(z.number().int().min(0).max(6)).optional(),
  estimatedMinutes: z.number().int().min(1).max(1440).nullable().optional(),
  scheduledTime: z.number().int().min(0).max(1439).nullable().optional(),
  isPrivate: z.boolean().optional(),
});

// Chore Instruction schemas
export const createChoreInstructionSchema = z.object({
  choreId: z.string().cuid(),
  stepNumber: z.number().int().min(1),
  description: z.string().min(1).max(500),
});

export const updateChoreInstructionSchema = z.object({
  stepNumber: z.number().int().min(1).optional(),
  description: z.string().min(1).max(500).optional(),
});

// Chore Schedule schemas
export const createChoreScheduleSchema = z.object({
  choreId: z.string().cuid(),
  assignedToId: z.string().cuid().optional(),
  scheduledDate: z.date(),
});

export const updateChoreScheduleSchema = z.object({
  assignedToId: z.string().cuid().nullable().optional(),
  scheduledDate: z.date().optional(),
  status: ScheduleStatusSchema.optional(),
  completedAt: z.date().nullable().optional(),
});

// Calendar Connection schemas
export const createCalendarConnectionSchema = z.object({
  userId: z.string().cuid(),
  provider: z.string().min(1).max(50),
  accessToken: z.string(),
  refreshToken: z.string().optional(),
  expiresAt: z.date().optional(),
});

export const updateCalendarConnectionSchema = z.object({
  accessToken: z.string().optional(),
  refreshToken: z.string().nullable().optional(),
  expiresAt: z.date().nullable().optional(),
  isActive: z.boolean().optional(),
});

// Export types
export type CreateHousehold = z.infer<typeof createHouseholdSchema>;
export type UpdateHousehold = z.infer<typeof updateHouseholdSchema>;
export type CreateUser = z.infer<typeof createUserSchema>;
export type UpdateUser = z.infer<typeof updateUserSchema>;
export type CreateChore = z.infer<typeof createChoreSchema>;
export type UpdateChore = z.infer<typeof updateChoreSchema>;
export type CreateChoreInstruction = z.infer<typeof createChoreInstructionSchema>;
export type UpdateChoreInstruction = z.infer<typeof updateChoreInstructionSchema>;
export type CreateChoreSchedule = z.infer<typeof createChoreScheduleSchema>;
export type UpdateChoreSchedule = z.infer<typeof updateChoreScheduleSchema>;
export type CreateCalendarConnection = z.infer<typeof createCalendarConnectionSchema>;
export type UpdateCalendarConnection = z.infer<typeof updateCalendarConnectionSchema>;
export type RecurrenceType = z.infer<typeof RecurrenceTypeSchema>;
export type ScheduleStatus = z.infer<typeof ScheduleStatusSchema>;

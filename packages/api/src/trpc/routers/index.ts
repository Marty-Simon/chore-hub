/**
 * Main app router
 */

import { router, createContext } from '../trpc';
import { householdRouter } from './household';
import { userRouter } from './user';
import { choreRouter } from './chore';
import { scheduleRouter } from './schedule';
import { invitationRouter } from './invitation';
import { calendarRouter } from './calendar';
import { privacyRouter } from './privacy';

export const appRouter = router({
  // Feature routers
  household: householdRouter,
  user: userRouter,
  chore: choreRouter,
  schedule: scheduleRouter,
  invitation: invitationRouter,
  calendar: calendarRouter,
  privacy: privacyRouter,
});

export { createContext };
export type AppRouter = typeof appRouter;

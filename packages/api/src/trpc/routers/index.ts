/**
 * Main app router
 */

import { router, createContext } from '../trpc';
import { householdRouter } from './household';
import { userRouter } from './user';
import { choreRouter } from './chore';
import { scheduleRouter } from './schedule';

export const appRouter = router({
  // Feature routers
  household: householdRouter,
  user: userRouter,
  chore: choreRouter,
  schedule: scheduleRouter,
});

export { createContext };
export type AppRouter = typeof appRouter;

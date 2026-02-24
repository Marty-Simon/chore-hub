/**
 * tRPC router - re-exports from routers/index.ts
 */

import { appRouter, createContext } from './routers';

export { appRouter, createContext };
export type AppRouter = typeof appRouter;

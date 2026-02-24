/**
 * tRPC initialization
 */

import { initTRPC } from '@trpc/server';
import { ZodError } from 'zod';
import type { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { prisma, PrismaClient } from '@chore-hub/database';

/**
 * Context type - explicitly defined to avoid Prisma runtime type inference issues
 */
export interface Context {
  req: CreateExpressContextOptions['req'];
  res: CreateExpressContextOptions['res'];
  prisma: PrismaClient;
}

/**
 * Create context for each request
 */
export function createContext({ req, res }: CreateExpressContextOptions): Context {
  return {
    req,
    res,
    prisma,
  };
}

/**
 * Initialize tRPC
 */
const t = initTRPC.context<Context>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;

// Example protected procedure (add your auth logic)
// export const protectedProcedure = publicProcedure.use(({ ctx, next }) => {
//   if (!ctx.user) {
//     throw new TRPCError({ code: 'UNAUTHORIZED' });
//   }
//   return next({ ctx: { ...ctx, user: ctx.user } });
// });

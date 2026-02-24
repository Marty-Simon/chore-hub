/**
 * tRPC client for mobile
 */

import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@chore-hub/api';

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: process.env.API_URL || 'http://10.0.2.2:3000/trpc',
    }),
  ],
});

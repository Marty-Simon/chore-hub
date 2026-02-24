/**
 * Shared tRPC client factory
 */

import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import type { AppRouter } from '@chore-hub/api';

/**
 * Create a tRPC client with custom configuration
 */
export function createTrpcClient(options: {
  url?: string;
  headers?: () => Record<string, string>;
} = {}) {
  const trpc = createTRPCReact<AppRouter>();

  const client = trpc.createClient({
    links: [
      httpBatchLink({
        url: options.url || 'http://localhost:3000/trpc',
        headers: options.headers,
      }),
    ],
  });

  return { trpc, client };
}

export type { AppRouter };

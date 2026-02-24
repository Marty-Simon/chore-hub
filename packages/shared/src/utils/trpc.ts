/**
 * tRPC client configuration
 * Shared between web and mobile platforms
 */

import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@chore-hub/api';

export const trpc = createTRPCReact<AppRouter>();

/**
 * Create a tRPC client with the specified base URL
 * @param baseUrl - The API server base URL (e.g., 'http://localhost:3001')
 */
export function createTrpcClient(baseUrl: string) {
  return trpc.createClient({
    links: [
      httpBatchLink({
        url: `${baseUrl}/trpc`,
      }),
    ],
  });
}

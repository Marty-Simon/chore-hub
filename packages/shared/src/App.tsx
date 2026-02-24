/**
 * Main App component with all providers
 * Platform packages wrap this with their specific router (e.g., BrowserRouter for web)
 */

// Initialize theme FIRST (configures unistyles before any StyleSheet.create)
import './theme';

import { useMemo } from 'react';
import { NavigatorProvider } from '@idealyst/navigation';
import { config } from '@idealyst/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouter } from './navigation';
import { trpc, createTrpcClient } from './utils/trpc';

// API URL from environment configuration
const API_URL = config.get('API_URL')!;

export default function App() {
  const queryClient = useMemo(() => new QueryClient(), []);
  const trpcClient = useMemo(() => createTrpcClient(API_URL), []);

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <NavigatorProvider route={AppRouter} />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

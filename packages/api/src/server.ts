import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter, createContext } from './trpc/router';


export const app = express();

// CORS configuration from environment
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3001';

// Middleware
app.use(cors({
  origin: CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json());

// tRPC middleware
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);


// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Root route
app.get('/', (req, res) => {
  res.json({
    name: 'Chore Hub API',
    version: '0.1.0',
    endpoints: {
      health: '/health',
      trpc: '/trpc',
    },
  });
});

// Start server
const PORT = process.env.PORT || 3000;

export function startServer() {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Start if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  startServer();
}

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';
import path from 'path';

// Monorepo root (where hoisted node_modules live)
const monorepoRoot = path.resolve(__dirname, '../..');

export default defineConfig({
  plugins: [
    babel({
      filter: (id) =>
        id.includes('node_modules/@idealyst/') ||
        (id.includes('/packages/') && /\.(tsx?|jsx?)$/.test(id)),
      babelConfig: {
        presets: [
          ['@babel/preset-react', { runtime: 'automatic' }],
          ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
        ],
        plugins: [
          // 0. Config plugin - injects env vars at build time
          ['@idealyst/config/plugin', {
            extends: ['../shared/.env'],
          }],
          // 1. Idealyst theme plugin - processes $iterator patterns FIRST
          [
            '@idealyst/theme/plugin',
            {
              autoProcessPaths: [
                'packages/',
                '@idealyst/components',
                '@idealyst/navigation',
                '@idealyst/theme',
              ],
              themePath: '../shared/src/theme.ts',
            },
          ],
          // 2. Unistyles plugin - processes StyleSheet.create SECOND
          [
            'react-native-unistyles/plugin',
            {
              root: 'src',
              autoProcessPaths: [
                'packages/',
                '@idealyst/components',
                '@idealyst/navigation',
                '@idealyst/theme',
              ],
            },
          ],
          // 3. Idealyst components web plugin
          ['@idealyst/components/plugin/web', { root: 'src' }],
        ],
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      'react-native': path.resolve(monorepoRoot, 'node_modules/react-native-web'),
      'react-native-unistyles': path.resolve(monorepoRoot, 'node_modules/react-native-unistyles'),
      '@react-native/normalize-colors': path.resolve(monorepoRoot, 'node_modules/@react-native/normalize-colors'),
      '@mdi/react': path.resolve(monorepoRoot, 'node_modules/@mdi/react'),
      '@mdi/js': path.resolve(monorepoRoot, 'node_modules/@mdi/js'),
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.js', '.jsx'],
    conditions: ['browser', 'import', 'module', 'default'],
    preserveSymlinks: false,
  },
  define: {
    global: 'globalThis',
    __DEV__: JSON.stringify(true),
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  optimizeDeps: {
    include: [
      'react-native-web',
      '@react-native/normalize-colors',
    ],
    exclude: [
      '@chore-hub/shared',
    ],
    esbuildOptions: {
      resolveExtensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.jsx', '.js'],
      loader: {
        '.tsx': 'tsx',
        '.ts': 'ts',
      },
    },
  },
});

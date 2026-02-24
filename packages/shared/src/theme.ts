/**
 * Theme configuration for the application
 */

import { StyleSheet } from 'react-native-unistyles';
import { fromTheme, lightTheme, darkTheme } from '@idealyst/theme';

// Build themes as separate variables for babel plugin compatibility
const light = fromTheme(lightTheme)
  .build();

// Strongly type dark theme based on light theme - they should match!
const dark: typeof light = fromTheme(darkTheme)
  .build();

// Define the themes object for type inference
const themes = {
  light,
  dark,
} as const;

// Type definitions for custom themes
type AppBreakpoints = (typeof light)['breakpoints'];
type AppTheme = typeof light;

// Register theme with @idealyst/theme for proper type inference
declare module '@idealyst/theme' {
  interface CustomThemeRegistry {
    theme: AppTheme;
  }
}

// Augment Unistyles with custom theme types
declare module 'react-native-unistyles' {
  interface UnistylesThemes {
    light: AppTheme;
    dark: AppTheme;
  }
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

// Configure unistyles with the Idealyst themes
StyleSheet.configure({
  themes,
  settings: {
    initialTheme: 'light',
  },
});

export { StyleSheet };

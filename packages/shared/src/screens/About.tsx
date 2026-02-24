/**
 * About screen - explains what Idealyst is
 */

import { View, Text, Button } from '@idealyst/components';
import { useNavigator } from '@idealyst/navigation';
import { useTheme } from '@idealyst/theme';

export default function About() {
  const theme = useTheme();
  const { goBack } = useNavigator();

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        backgroundColor: theme.colors.surface.primary,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: theme.colors.text.primary,
          marginBottom: 16,
        }}
      >
        What is Idealyst?
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: theme.colors.text.secondary,
          marginBottom: 16,
          lineHeight: 24,
        }}
      >
        Idealyst is a cross-platform framework for building React applications that run on both web and mobile from a single codebase.
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: theme.colors.text.secondary,
          marginBottom: 16,
          lineHeight: 24,
        }}
      >
        Key features:
      </Text>

      <View style={{ marginLeft: 16, marginBottom: 16 }}>
        <Text style={{ fontSize: 16, color: theme.colors.text.secondary, marginBottom: 8 }}>
          • Unified component library for web and mobile
        </Text>
        <Text style={{ fontSize: 16, color: theme.colors.text.secondary, marginBottom: 8 }}>
          • Shared navigation system across platforms
        </Text>
        <Text style={{ fontSize: 16, color: theme.colors.text.secondary, marginBottom: 8 }}>
          • Theme system with light/dark mode support
        </Text>
        <Text style={{ fontSize: 16, color: theme.colors.text.secondary, marginBottom: 8 }}>
          • Type-safe API integration with tRPC
        </Text>
        <Text style={{ fontSize: 16, color: theme.colors.text.secondary, marginBottom: 8 }}>
          • Monorepo structure for code sharing
        </Text>
      </View>

      <Text
        style={{
          fontSize: 16,
          color: theme.colors.text.secondary,
          marginBottom: 24,
          lineHeight: 24,
        }}
      >
        Write once, run everywhere - with native performance and consistent design.
      </Text>

      <Button onPress={goBack} intent="success">
        Go Back
      </Button>
    </View>
  );
}

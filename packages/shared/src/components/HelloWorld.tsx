/**
 * Hello World component - demonstrates cross-platform usage
 */

import { View, Text, Button } from '@idealyst/components';
import { useTheme } from '@idealyst/theme';

export interface HelloWorldProps {
  name?: string;
  onPress?: () => void;
}

export function HelloWorld({ name = 'World', onPress }: HelloWorldProps) {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: theme.colors.surface.primary,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: theme.colors.text.primary,
          marginBottom: 8,
        }}
      >
        Hello, {name}!
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: theme.colors.text.secondary,
          marginBottom: 24,
        }}
      >
        Built with Idealyst Framework
      </Text>
      {onPress && (
        <Button onPress={onPress} intent="primary">
          Get Started
        </Button>
      )}
    </View>
  );
}

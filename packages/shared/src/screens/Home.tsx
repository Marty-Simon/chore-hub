/**
 * Home Screen - Main dashboard
 */

import { View, Text, Card, Button, ScrollView } from '@idealyst/components';
import type { IconName } from '@idealyst/components';
import { useNavigator } from '@idealyst/navigation';

interface NavCardProps {
  title: string;
  description: string;
  icon: IconName;
  path: string;
  intent?: 'primary' | 'secondary' | 'success' | 'info';
}

function NavCard({ title, description, icon, path, intent = 'primary' }: NavCardProps) {
  const navigator = useNavigator();

  return (
    <Card padding="md" gap="md">
      <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="md">
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          background="primary"
        >
          <Text typography="h5" color="inverse">
            {icon}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text typography="subtitle1" weight="semibold">
            {title}
          </Text>
          <Text typography="body2" color="secondary">
            {description}
          </Text>
        </View>
      </View>
      <Button
        type="contained"
        intent={intent}
        leftIcon={icon}
        onPress={() => navigator.navigate({ path })}
      >
        Open
      </Button>
    </Card>
  );
}

export default function Home() {
  return (
    <ScrollView>
      <View padding="lg" gap="lg">
        <View>
          <Text typography="h3" weight="bold">
            Welcome to Chore Hub
          </Text>
          <Text typography="body1" color="secondary">
            Manage household chores and keep your home organized
          </Text>
        </View>

        <View gap="md">
          <NavCard
            title="My Chores"
            description="View and complete your assigned chores"
            icon="check"
            path="/my-chores"
            intent="success"
          />

          <NavCard
            title="Calendar"
            description="See all scheduled chores in calendar view"
            icon="calendar"
            path="/calendar"
            intent="info"
          />

          <NavCard
            title="All Chores"
            description="Browse and manage all household chores"
            icon="list"
            path="/chores"
            intent="primary"
          />

          <NavCard
            title="About"
            description="Learn more about this app"
            icon="information"
            path="/about"
            intent="secondary"
          />
        </View>

        <Card padding="md" background="primary" gap="sm">
          <Text typography="subtitle1" weight="semibold" color="inverse">
            Quick Stats
          </Text>
          <View style={{ flexDirection: 'row' }} gap="md">
            <View style={{ flex: 1 }}>
              <Text typography="h4" weight="bold" color="inverse">
                0
              </Text>
              <Text typography="caption" color="inverse">
                Pending Chores
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text typography="h4" weight="bold" color="inverse">
                0
              </Text>
              <Text typography="caption" color="inverse">
                Completed Today
              </Text>
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

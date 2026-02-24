/**
 * Chores List Screen - View and manage chore definitions
 */

import { useState } from 'react';
import { View, Text, Button, Card, Badge, TextInput, ScrollView, Pressable } from '@idealyst/components';
import type { IconName } from '@idealyst/components';
import { trpc } from '../trpc/client';
import { useNavigator } from '@idealyst/navigation';

export default function ChoresList() {
  const navigator = useNavigator();
  const [searchQuery, setSearchQuery] = useState('');

  // TODO: Get householdId and userId from auth context when implemented
  const householdId = 'temp-household-id';
  const userId = 'temp-user-id';

  const { data: chores, isLoading } = trpc.chore.listByHousehold.useQuery({
    householdId,
    userId,
  });

  const filteredChores = chores?.filter((chore) =>
    chore.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRecurrenceIcon = (recurrence: string): IconName => {
    switch (recurrence) {
      case 'DAILY':
        return 'calendar';
      case 'WEEKLY':
        return 'calendar-week';
      case 'MONTHLY':
        return 'calendar-month';
      default:
        return 'calendar';
    }
  };

  const formatRecurrence = (recurrence: string, value: number) => {
    const unit = recurrence.toLowerCase();
    if (value === 1) {
      return `Every ${unit.slice(0, -2)}`;
    }
    return `Every ${value} ${unit.toLowerCase()}`;
  };

  const formatTime = (minutes: number | null) => {
    if (!minutes) return 'Not specified';
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  const handleCreateChore = () => {
    navigator.navigate({ path: '/chores/new' });
  };

  const handleChorePress = (choreId: string) => {
    navigator.navigate({ path: `/chores/${choreId}` });
  };

  return (
    <ScrollView>
      <View padding="lg" gap="lg">
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text typography="h4" weight="bold">
              Chores
            </Text>
            <Text color="secondary">
              Manage household chore definitions
            </Text>
          </View>
          <Button
            intent="primary"
            leftIcon="plus"
            onPress={handleCreateChore}
          >
            New Chore
          </Button>
        </View>

        {/* Search */}
        <TextInput
          placeholder="Search chores..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          inputMode="text"
        />

        {/* Chores List */}
        {isLoading && (
          <Card padding="md">
            <Text color="secondary">Loading chores...</Text>
          </Card>
        )}

        {filteredChores && filteredChores.length === 0 && (
          <Card padding="lg" style={{ alignItems: 'center' }} gap="md">
            <Text color="secondary">
              {searchQuery ? 'No chores found matching your search' : 'No chores yet'}
            </Text>
            {!searchQuery && (
              <Button intent="primary" onPress={handleCreateChore} leftIcon="plus">
                Create Your First Chore
              </Button>
            )}
          </Card>
        )}

        <View gap="md">
          {filteredChores?.map((chore) => (
            <Pressable key={chore.id} onPress={() => handleChorePress(chore.id)}>
              <Card padding="md" gap="sm">
                <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="sm">
                  <Text typography="subtitle1" weight="semibold" style={{ flex: 1 }}>
                    {chore.title}
                  </Text>
                  {chore.isPrivate && (
                    <Badge type="outlined" intent="info" size="sm">
                      Private
                    </Badge>
                  )}
                </View>

                {chore.description && (
                  <Text typography="body2" color="secondary">
                    {chore.description}
                  </Text>
                )}

                <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="md">
                  <Badge
                    type="filled"
                    intent="neutral"
                    size="sm"
                    leftIcon={getRecurrenceIcon(chore.recurrence)}
                  >
                    {formatRecurrence(chore.recurrence, chore.recurrenceValue)}
                  </Badge>

                  <Text typography="caption" color="secondary">
                    Duration: {formatTime(chore.estimatedMinutes)}
                  </Text>

                  <Text typography="caption" color="secondary">
                    {chore.instructions.length} steps
                  </Text>
                </View>
              </Card>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

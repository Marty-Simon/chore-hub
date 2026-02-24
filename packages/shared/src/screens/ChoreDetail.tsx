/**
 * Chore Detail Screen - View chore instructions and details
 */

import { View, Text, Button, Card, Badge, ScrollView } from '@idealyst/components';
import type { IconName } from '@idealyst/components';
import { useNavigator, useParams } from '@idealyst/navigation';
import { trpc } from '../trpc/client';

export default function ChoreDetail() {
  const navigator = useNavigator();
  const params = useParams();
  const choreId = params.id as string;

  const { data: chore, isLoading } = trpc.chore.getById.useQuery({
    id: choreId,
  });

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

  if (isLoading) {
    return (
      <View padding="lg">
        <Text color="secondary">Loading chore details...</Text>
      </View>
    );
  }

  if (!chore) {
    return (
      <View padding="lg" gap="md">
        <Text typography="h5" weight="bold">
          Chore Not Found
        </Text>
        <Button onPress={() => navigator.navigate({ path: '/chores' })}>
          Back to Chores
        </Button>
      </View>
    );
  }

  return (
    <ScrollView>
      <View padding="lg" gap="lg">
        {/* Header */}
        <View gap="sm">
          <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="sm">
            <Text typography="h4" weight="bold" style={{ flex: 1 }}>
              {chore.title}
            </Text>
            {chore.isPrivate && (
              <Badge type="outlined" intent="info">
                Private
              </Badge>
            )}
          </View>

          {chore.description && (
            <Text typography="body1" color="secondary">
              {chore.description}
            </Text>
          )}
        </View>

        {/* Metadata */}
        <Card padding="md" gap="md">
          <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="sm">
            <Badge
              type="filled"
              intent="neutral"
              leftIcon={getRecurrenceIcon(chore.recurrence)}
            >
              {formatRecurrence(chore.recurrence, chore.recurrenceValue)}
            </Badge>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="md">
            <View style={{ flex: 1 }}>
              <Text typography="caption" color="secondary">
                Estimated Time
              </Text>
              <Text typography="body1" weight="medium">
                {formatTime(chore.estimatedMinutes)}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text typography="caption" color="secondary">
                Household
              </Text>
              <Text typography="body1" weight="medium">
                {chore.household.name}
              </Text>
            </View>
          </View>
        </Card>

        {/* Instructions */}
        <View gap="md">
          <Text typography="h6" weight="semibold">
            How to Complete This Chore
          </Text>

          {chore.instructions.length === 0 && (
            <Card padding="lg" style={{ alignItems: 'center' }}>
              <Text color="secondary">No instructions added yet</Text>
            </Card>
          )}

          {chore.instructions.map((instruction, index) => (
            <Card key={instruction.id} padding="md" gap="sm">
              <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="md">
                <View
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  background="primary"
                >
                  <Text typography="body1" weight="bold" color="inverse">
                    {instruction.stepNumber}
                  </Text>
                </View>

                <Text typography="body1" style={{ flex: 1 }}>
                  {instruction.description}
                </Text>
              </View>
            </Card>
          ))}
        </View>

        {/* Recent Schedules */}
        {chore.schedules && chore.schedules.length > 0 && (
          <View gap="md">
            <Text typography="h6" weight="semibold">
              Recent Schedule
            </Text>

            {chore.schedules.slice(0, 5).map((schedule) => (
              <Card key={schedule.id} padding="sm" gap="xs">
                <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="sm">
                  <Badge type="dot" intent="neutral" size="sm">
                    {new Date(schedule.scheduledDate).toLocaleDateString()}
                  </Badge>
                  {schedule.assignedTo && (
                    <Text typography="body2" color="secondary">
                      {schedule.assignedTo.name}
                    </Text>
                  )}
                  <Badge type="outlined" intent="info" size="sm">
                    {schedule.status}
                  </Badge>
                </View>
              </Card>
            ))}
          </View>
        )}

        {/* Actions */}
        <View style={{ flexDirection: 'row' }} gap="md">
          <Button
            type="outlined"
            intent="primary"
            leftIcon="pencil"
            style={{ flex: 1 }}
          >
            Edit Chore
          </Button>
          <Button
            type="outlined"
            intent="danger"
            leftIcon="delete"
            style={{ flex: 1 }}
          >
            Delete
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

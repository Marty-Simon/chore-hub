/**
 * My Chores Screen - View user's assigned chores
 */

import { useState } from 'react';
import { View, Text, Button, Card, Badge, Pressable } from '@idealyst/components';
import { ScrollView } from 'react-native';
import type { IconName } from '@idealyst/components';
import { trpc } from '../utils/trpc';
import { useNavigator } from '@idealyst/navigation';

export default function MyChores() {
  const navigator = useNavigator();
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  // TODO: Get userId from auth context when implemented
  const userId = 'temp-user-id';

  const { data: schedules, isLoading, refetch } = trpc.schedule.upcoming.useQuery({
    userId,
    limit: 50,
  });

  const completeScheduleMutation = trpc.schedule.complete.useMutation({
    onSuccess: () => {
      refetch();
    },
  });

  const filteredSchedules = schedules?.filter((schedule) => {
    if (filter === 'pending') {
      return schedule.status === 'PENDING' || schedule.status === 'IN_PROGRESS';
    }
    if (filter === 'completed') {
      return schedule.status === 'COMPLETED';
    }
    return true;
  });

  const getStatusColor = (status: string): 'success' | 'warning' | 'info' | 'neutral' => {
    switch (status) {
      case 'COMPLETED':
        return 'success';
      case 'IN_PROGRESS':
        return 'warning';
      case 'PENDING':
        return 'info';
      default:
        return 'neutral';
    }
  };

  const getStatusIcon = (status: string): IconName => {
    switch (status) {
      case 'COMPLETED':
        return 'check';
      case 'IN_PROGRESS':
        return 'clock';
      case 'PENDING':
        return 'calendar';
      default:
        return 'help';
    }
  };

  const formatDate = (date: Date) => {
    const scheduleDate = new Date(date);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    today.setHours(0, 0, 0, 0);
    tomorrow.setHours(0, 0, 0, 0);
    scheduleDate.setHours(0, 0, 0, 0);

    if (scheduleDate.getTime() === today.getTime()) {
      return 'Today';
    } else if (scheduleDate.getTime() === tomorrow.getTime()) {
      return 'Tomorrow';
    }

    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (minutes: number | null) => {
    if (!minutes) return null;
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  const handleCompleteChore = async (scheduleId: string) => {
    try {
      await completeScheduleMutation.mutateAsync({ id: scheduleId });
    } catch (error) {
      console.error('Failed to complete chore:', error);
    }
  };

  const handleViewInstructions = (choreId: string) => {
    navigator.navigate({ path: `/chores/${choreId}` });
  };

  return (
    <ScrollView>
      <View padding="lg" gap="lg">
        <View>
          <Text typography="h4" weight="bold">
            My Chores
          </Text>
          <Text color="secondary">
            Your assigned household tasks
          </Text>
        </View>

        {/* Filter Tabs */}
        <View style={{ flexDirection: 'row' }} gap="sm">
          <Button
            type={filter === 'all' ? 'contained' : 'outlined'}
            size="sm"
            onPress={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            type={filter === 'pending' ? 'contained' : 'outlined'}
            size="sm"
            onPress={() => setFilter('pending')}
          >
            Pending
          </Button>
          <Button
            type={filter === 'completed' ? 'contained' : 'outlined'}
            size="sm"
            onPress={() => setFilter('completed')}
          >
            Completed
          </Button>
        </View>

        {/* Chores List */}
        {isLoading && (
          <Card padding="md">
            <Text color="secondary">Loading your chores...</Text>
          </Card>
        )}

        {filteredSchedules && filteredSchedules.length === 0 && (
          <Card padding="lg" style={{ alignItems: 'center' }}>
            <Text color="secondary">
              {filter === 'completed'
                ? 'No completed chores yet'
                : 'No chores assigned to you'}
            </Text>
          </Card>
        )}

        <View gap="md">
          {filteredSchedules?.map((schedule) => (
            <Card key={schedule.id} padding="md" gap="md">
              <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="sm">
                <Badge
                  type="filled"
                  intent={getStatusColor(schedule.status)}
                >
                  {schedule.status}
                </Badge>
                <Text typography="body2" color="secondary">
                  {formatDate(new Date(schedule.scheduledDate))}
                </Text>
              </View>

              <View gap="xs">
                <Text typography="subtitle1" weight="semibold">
                  {schedule.chore.title}
                </Text>

                {schedule.chore.estimatedMinutes && (
                  <Text typography="body2" color="secondary">
                    Estimated time: {formatTime(schedule.chore.estimatedMinutes)}
                  </Text>
                )}
              </View>

              {/* Instructions Preview */}
              {schedule.chore.instructions && schedule.chore.instructions.length > 0 && (
                <View gap="xs">
                  <Text typography="caption" weight="semibold" color="secondary">
                    Steps:
                  </Text>
                  {schedule.chore.instructions.slice(0, 3).map((instruction) => (
                    <View key={instruction.id} style={{ flexDirection: 'row' }} gap="xs">
                      <Text typography="body2" color="secondary">
                        {instruction.stepNumber}.
                      </Text>
                      <Text typography="body2" color="secondary" style={{ flex: 1 }}>
                        {instruction.description}
                      </Text>
                    </View>
                  ))}
                  {schedule.chore.instructions.length > 3 && (
                    <Text typography="caption" color="secondary">
                      +{schedule.chore.instructions.length - 3} more steps
                    </Text>
                  )}
                </View>
              )}

              {/* Actions */}
              {schedule.status !== 'COMPLETED' && (
                <View style={{ flexDirection: 'row' }} gap="sm">
                  <Button
                    size="sm"
                    type="outlined"
                    intent="primary"
                    leftIcon="book-open"
                    style={{ flex: 1 }}
                    onPress={() => handleViewInstructions(schedule.chore.id)}
                  >
                    Instructions
                  </Button>
                  <Button
                    size="sm"
                    type="contained"
                    intent="success"
                    leftIcon="check"
                    style={{ flex: 1 }}
                    onPress={() => handleCompleteChore(schedule.id)}
                    disabled={completeScheduleMutation.isPending}
                  >
                    {completeScheduleMutation.isPending ? 'Completing...' : 'Complete'}
                  </Button>
                </View>
              )}

              {schedule.status === 'COMPLETED' && schedule.completedAt && (
                <Text typography="caption" color="secondary">
                  Completed on {new Date(schedule.completedAt).toLocaleDateString()}
                </Text>
              )}
            </Card>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

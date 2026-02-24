/**
 * Calendar View Screen - Shows chores scheduled in a calendar format
 */

import { useState, useEffect } from 'react';
import { View, Text, Button, Card, Badge } from '@idealyst/components';
import { ScrollView } from 'react-native';
import type { IconName } from '@idealyst/components';
import { DatePicker } from '@idealyst/datepicker';
import { trpc } from '../utils/trpc';

interface ChoreScheduleItem {
  id: string;
  scheduledDate: Date;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'SKIPPED';
  chore: {
    id: string;
    title: string;
    estimatedMinutes: number | null;
    isPrivate: boolean;
  };
  assignedTo: {
    id: string;
    name: string;
  } | null;
}

export default function CalendarView() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('week');
  
  // Calculate date range based on view mode
  const getDateRange = () => {
    const start = new Date(selectedDate);
    const end = new Date(selectedDate);
    
    if (viewMode === 'day') {
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
    } else if (viewMode === 'week') {
      const day = start.getDay();
      start.setDate(start.getDate() - day);
      start.setHours(0, 0, 0, 0);
      end.setDate(start.getDate() + 6);
      end.setHours(23, 59, 59, 999);
    } else {
      start.setDate(1);
      start.setHours(0, 0, 0, 0);
      end.setMonth(end.getMonth() + 1);
      end.setDate(0);
      end.setHours(23, 59, 59, 999);
    }
    
    return { startDate: start, endDate: end };
  };

  const { startDate, endDate } = getDateRange();
  
  // Fetch schedules for the date range
  const { data: schedules, isLoading } = trpc.schedule.listByDateRange.useQuery({
    startDate,
    endDate,
    // TODO: Add userId from auth context when implemented
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

  return (
    <ScrollView>
      <View padding="lg" gap="lg">
        <View>
          <Text typography="h4" weight="bold">
            Chore Calendar
          </Text>
          <Text color="secondary">
            View and manage your scheduled chores
          </Text>
        </View>

        {/* View Mode Selector */}
        <View style={{ flexDirection: 'row' }} gap="sm">
          <Button
            type={viewMode === 'day' ? 'contained' : 'outlined'}
            size="sm"
            onPress={() => setViewMode('day')}
          >
            Day
          </Button>
          <Button
            type={viewMode === 'week' ? 'contained' : 'outlined'}
            size="sm"
            onPress={() => setViewMode('week')}
          >
            Week
          </Button>
          <Button
            type={viewMode === 'month' ? 'contained' : 'outlined'}
            size="sm"
            onPress={() => setViewMode('month')}
          >
            Month
          </Button>
        </View>

        {/* Date Picker */}
        <Card padding="md">
          <DatePicker value={selectedDate} onChange={setSelectedDate} />
        </Card>

        {/* Schedule List */}
        <View gap="md">
          <Text typography="h6" weight="semibold">
            Scheduled Chores ({formatDate(startDate)} - {formatDate(endDate)})
          </Text>

          {isLoading && (
            <Card padding="md">
              <Text color="secondary">Loading schedules...</Text>
            </Card>
          )}

          {schedules && schedules.length === 0 && (
            <Card padding="lg" style={{ alignItems: 'center' }}>
              <Text color="secondary">No chores scheduled for this period</Text>
            </Card>
          )}

          {schedules?.map((schedule) => (
            <Card key={schedule.id} padding="md" gap="sm">
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

              <Text typography="subtitle1" weight="semibold">
                {schedule.chore.title}
              </Text>

              <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="md">
                {schedule.assignedTo && (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="xs">
                    <Text typography="body2" color="secondary">
                      Assigned to:
                    </Text>
                    <Text typography="body2" weight="medium">
                      {schedule.assignedTo.name}
                    </Text>
                  </View>
                )}

                {schedule.chore.estimatedMinutes && (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="xs">
                    <Text typography="body2" color="secondary">
                      Duration:
                    </Text>
                    <Text typography="body2">
                      {formatTime(schedule.chore.estimatedMinutes)}
                    </Text>
                  </View>
                )}
              </View>

              {schedule.status !== 'COMPLETED' && (
                <View style={{ flexDirection: 'row' }} gap="sm">
                  <Button
                    size="sm"
                    type="outlined"
                    intent="primary"
                    leftIcon="pencil"
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    type="contained"
                    intent="success"
                    leftIcon="check"
                  >
                    Complete
                  </Button>
                </View>
              )}
            </Card>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

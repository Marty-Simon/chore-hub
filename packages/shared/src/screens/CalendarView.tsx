/**
 * Calendar View Screen - Shows chores scheduled in a calendar format
 */

import { useState, useEffect } from 'react';
import { View, Text, Button, Card, Badge } from '@idealyst/components';
import { ScrollView } from 'react-native';
import type { IconName } from '@idealyst/components';
import { DatePicker } from '@idealyst/datepicker';
import { useNavigator } from '@idealyst/navigation';
import { trpc } from '../utils/trpc';

interface ChoreScheduleItem {
  id: string;
  scheduledDate: Date;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'SKIPPED';
  chore: {
    id: string;
    title: string;
    description: string | null;
    descriptionList: string[];
    estimatedMinutes: number | null;
    scheduledTime: number | null;
    isPrivate: boolean;
  };
  assignedTo: {
    id: string;
    name: string;
  } | null;
}

export default function CalendarView() {
  const { goBack } = useNavigator();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('week');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'PENDING' | 'COMPLETED'>('ALL');
  
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

  // Filter schedules by status
  const filteredSchedules = schedules?.filter(schedule => {
    if (statusFilter === 'ALL') return true;
    if (statusFilter === 'PENDING') return schedule.status === 'PENDING' || schedule.status === 'IN_PROGRESS';
    if (statusFilter === 'COMPLETED') return schedule.status === 'COMPLETED';
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

  const formatPreferredTime = (minutesFromMidnight: number | null) => {
    if (minutesFromMidnight === null) return null;
    const hours = Math.floor(minutesFromMidnight / 60);
    const minutes = minutesFromMidnight % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  return (
    <ScrollView>
      <View padding="lg" gap="lg">
        <Button
          type="text"
          leftIcon="arrow-left"
          onPress={goBack}
          alignSelf="flex-start"
        >
          Back
        </Button>
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

        {/* Status Filter */}
        <View style={{ flexDirection: 'row' }} gap="sm">
          <Button
            type={statusFilter === 'ALL' ? 'contained' : 'outlined'}
            size="sm"
            onPress={() => setStatusFilter('ALL')}
          >
            All
          </Button>
          <Button
            type={statusFilter === 'PENDING' ? 'contained' : 'outlined'}
            size="sm"
            onPress={() => setStatusFilter('PENDING')}
          >
            Pending
          </Button>
          <Button
            type={statusFilter === 'COMPLETED' ? 'contained' : 'outlined'}
            size="sm"
            onPress={() => setStatusFilter('COMPLETED')}
          >
            Completed
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

          {filteredSchedules && filteredSchedules.length === 0 && (
            <Card padding="lg" style={{ alignItems: 'center' }}>
              <Text color="secondary">
                {statusFilter === 'ALL' 
                  ? 'No chores scheduled for this period'
                  : `No ${statusFilter.toLowerCase()} chores for this period`}
              </Text>
            </Card>
          )}

          {filteredSchedules?.map((schedule) => (
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

              {/* Description */}
              {schedule.chore.description && (
                <Text typography="body2" color="secondary">
                  {schedule.chore.description}
                </Text>
              )}

              {/* Description Bullet Points */}
              {schedule.chore.descriptionList && schedule.chore.descriptionList.length > 0 && (
                <View gap="xs">
                  <Text typography="body2" weight="semibold">
                    Task Breakdown:
                  </Text>
                  {schedule.chore.descriptionList.map((item, index) => (
                    <View key={index} style={{ flexDirection: 'row', gap: 8 }}>
                      <Text typography="body2">•</Text>
                      <Text typography="body2" style={{ flex: 1 }}>
                        {item}
                      </Text>
                    </View>
                  ))}
                </View>
              )}

              {/* Metadata Row */}
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} gap="md">
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

                {schedule.chore.scheduledTime !== null && (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="xs">
                    <Text typography="body2" color="secondary">
                      Scheduled time:
                    </Text>
                    <Text typography="body2">
                      {formatPreferredTime(schedule.chore.scheduledTime)}
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

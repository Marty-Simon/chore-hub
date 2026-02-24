/**
 * Chore Form Screen - Create or edit a chore
 */

import { useState } from 'react';
import { View, Text, Button, Card, TextInput, Select, Switch } from '@idealyst/components';
import { ScrollView } from 'react-native';
import { trpc } from '../utils/trpc';
import { useNavigator } from '@idealyst/navigation';
import type { RecurrenceType } from '@chore-hub/database';

export default function ChoreForm() {
  const navigator = useNavigator();
  const { goBack } = useNavigator();

  // TODO: Get householdId from auth context when implemented
  const householdId = 'temp-household-id';

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [recurrence, setRecurrence] = useState<RecurrenceType>('WEEKLY');
  const [recurrenceValue, setRecurrenceValue] = useState('1');
  const [hour, setHour] = useState('9');
  const [minute, setMinute] = useState('00');
  const [period, setPeriod] = useState<'AM' | 'PM'>('AM');
  const [isPrivate, setIsPrivate] = useState(false);
  const [estimatedHours, setEstimatedHours] = useState('0');
  const [estimatedMinutes, setEstimatedMinutes] = useState('30');

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Create mutation
  const createMutation = trpc.chore.create.useMutation({
    onSuccess: async (newChore) => {
      // Generate schedules for the next 3 months
      try {
        const startDate = new Date();
        const endDate = new Date();
        endDate.setMonth(endDate.getMonth() + 3);

        await generateSchedulesMutation.mutateAsync({
          choreId: newChore.id,
          startDate,
          endDate,
        });
      } catch (error) {
        console.error('Failed to generate schedules:', error);
        // Continue anyway - the chore was created successfully
      }
      goBack();
    },
    onError: (error) => {
      setErrors({ submit: error.message });
    },
  });

  // Generate schedules mutation
  const generateSchedulesMutation = trpc.schedule.generateForChore.useMutation();

  const recurrenceOptions = [
    { label: 'Daily', value: 'DAILY' },
    { label: 'Weekly', value: 'WEEKLY' },
    { label: 'Bi-Monthly (twice a month)', value: 'BIMONTHLY' },
    { label: 'Monthly', value: 'MONTHLY' },
  ];

  const hourOptions = Array.from({ length: 12 }, (_, i) => ({
    label: String(i + 1),
    value: String(i + 1),
  }));

  const minuteOptions = [
    { label: '00', value: '00' },
    { label: '15', value: '15' },
    { label: '30', value: '30' },
    { label: '45', value: '45' },
  ];

  const periodOptions = [
    { label: 'AM', value: 'AM' },
    { label: 'PM', value: 'PM' },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    const recValueNum = parseInt(recurrenceValue, 10);
    if (isNaN(recValueNum) || recValueNum < 1) {
      newErrors.recurrenceValue = 'Must be at least 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const convertTo24Hour = (h: string, m: string, p: 'AM' | 'PM'): number => {
    let hourNum = parseInt(h, 10);
    const minuteNum = parseInt(m, 10);

    if (p === 'PM' && hourNum !== 12) {
      hourNum += 12;
    } else if (p === 'AM' && hourNum === 12) {
      hourNum = 0;
    }

    return hourNum * 60 + minuteNum;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const totalMinutes =
      parseInt(estimatedHours, 10) * 60 + parseInt(estimatedMinutes, 10);
    const preferredTimeMinutes = convertTo24Hour(hour, minute, period);

    createMutation.mutate({
      title: title.trim(),
      description: description.trim() || undefined,
      householdId,
      recurrence: recurrence === 'BIMONTHLY' ? 'MONTHLY' : recurrence,
      recurrenceValue: recurrence === 'BIMONTHLY' ? 15 : parseInt(recurrenceValue, 10),
      estimatedMinutes: totalMinutes > 0 ? totalMinutes : undefined,
      isPrivate,
      // TODO: Add preferredTime field to database schema
      // preferredTime: preferredTimeMinutes,
    });
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
            Create New Chore
          </Text>
          <Text color="secondary">
            Define a new household chore and its schedule
          </Text>
        </View>

        <Card padding="lg" gap="lg">
          {/* Title */}
          <View gap="xs">
            <Text weight="semibold">Title *</Text>
            <TextInput
              placeholder="e.g., Vacuum living room"
              value={title}
              onChangeText={setTitle}
              inputMode="text"
            />
            {errors.title && (
              <Text color="danger" typography="caption">
                {errors.title}
              </Text>
            )}
          </View>

          {/* Description */}
          <View gap="xs">
            <Text weight="semibold">Description (optional)</Text>
            <TextInput
              placeholder="Add any additional details..."
              value={description}
              onChangeText={setDescription}
              inputMode="text"
              multiline
              numberOfLines={3}
            />
          </View>

          {/* Frequency */}
          <View gap="xs">
            <Text weight="semibold">Frequency *</Text>
            <Select
              value={recurrence}
              onChange={(value) => setRecurrence(value as RecurrenceType)}
              options={recurrenceOptions}
            />
          </View>

          {/* Recurrence Value (only show for non-bimonthly) */}
          {recurrence !== 'BIMONTHLY' && (
            <View gap="xs">
              <Text weight="semibold">
                Every {recurrence === 'DAILY' ? 'X days' : recurrence === 'WEEKLY' ? 'X weeks' : 'X months'}
              </Text>
              <TextInput
                placeholder="1"
                value={recurrenceValue}
                onChangeText={setRecurrenceValue}
                inputMode="numeric"
                keyboardType="number-pad"
              />
              {errors.recurrenceValue && (
                <Text color="danger" typography="caption">
                  {errors.recurrenceValue}
                </Text>
              )}
            </View>
          )}

          {/* Preferred Time */}
          <View gap="xs">
            <Text weight="semibold">Ideal Time to Complete</Text>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Select
                  value={hour}
                  onChange={setHour}
                  options={hourOptions}
                  placeholder="Hour"
                />
              </View>
              <Text>:</Text>
              <View style={{ flex: 1 }}>
                <Select
                  value={minute}
                  onChange={setMinute}
                  options={minuteOptions}
                  placeholder="Min"
                />
              </View>
              <View style={{ flex: 1 }}>
                <Select
                  value={period}
                  onChange={(value) => setPeriod(value as 'AM' | 'PM')}
                  options={periodOptions}
                />
              </View>
            </View>
            <Text color="secondary" typography="caption">
              When is the best time to complete this chore?
            </Text>
          </View>

          {/* Estimated Duration */}
          <View gap="xs">
            <Text weight="semibold">Estimated Duration</Text>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <View style={{ flex: 1 }} gap="xs">
                <Text typography="caption">Hours</Text>
                <TextInput
                  placeholder="0"
                  value={estimatedHours}
                  onChangeText={setEstimatedHours}
                  inputMode="numeric"
                  keyboardType="number-pad"
                />
              </View>
              <View style={{ flex: 1 }} gap="xs">
                <Text typography="caption">Minutes</Text>
                <TextInput
                  placeholder="30"
                  value={estimatedMinutes}
                  onChangeText={setEstimatedMinutes}
                  inputMode="numeric"
                  keyboardType="number-pad"
                />
              </View>
            </View>
          </View>

          {/* Privacy */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flex: 1 }} gap="xs">
              <Text weight="semibold">Private Chore</Text>
              <Text color="secondary" typography="caption">
                Only visible to assigned household members
              </Text>
            </View>
            <Switch value={isPrivate} onValueChange={setIsPrivate} />
          </View>
        </Card>

        {/* Submit Error */}
        {errors.submit && (
          <Card padding="md" intent="danger">
            <Text color="danger">{errors.submit}</Text>
          </Card>
        )}

        {/* Actions */}
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Button
            type="outlined"
            onPress={goBack}
            style={{ flex: 1 }}
            disabled={createMutation.isPending}
          >
            Cancel
          </Button>
          <Button
            intent="primary"
            onPress={handleSubmit}
            style={{ flex: 1 }}
            disabled={createMutation.isPending}
          >
            {createMutation.isPending ? 'Creating...' : 'Create Chore'}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

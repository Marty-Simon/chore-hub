/**
 * Chore Form Screen - Create or edit a chore
 */

import { useState } from 'react';
import { View, Text, Button, Card, TextInput, Select, Switch } from '@idealyst/components';
import { ScrollView } from 'react-native';
import { trpc } from '../utils/trpc';
import { useNavigator } from '@idealyst/navigation';
import type { RecurrenceType } from '@chore-hub/database';

const WEEKDAYS = [
  { label: 'Sunday', value: 0 },
  { label: 'Monday', value: 1 },
  { label: 'Tuesday', value: 2 },
  { label: 'Wednesday', value: 3 },
  { label: 'Thursday', value: 4 },
  { label: 'Friday', value: 5 },
  { label: 'Saturday', value: 6 },
];

export default function ChoreForm() {
  const navigator = useNavigator();
  const { goBack } = useNavigator();

  // TODO: Get householdId from auth context when implemented
  const householdId = 'temp-household-id';

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionBullets, setDescriptionBullets] = useState<string[]>(['']);
  const [recurrence, setRecurrence] = useState<RecurrenceType>('WEEKLY');
  const [recurrenceValue, setRecurrenceValue] = useState('1');
  const [selectedWeekdays, setSelectedWeekdays] = useState<number[]>([]);
  const [scheduleMonths, setScheduleMonths] = useState('6'); // Default to 6 months
  
  // Single customizable time
  const [hour, setHour] = useState('9');
  const [minute, setMinute] = useState('00');
  const [period, setPeriod] = useState<'AM' | 'PM'>('AM');
  const [enableTime, setEnableTime] = useState(false);
  
  const [isPrivate, setIsPrivate] = useState(false);
  const [estimatedHours, setEstimatedHours] = useState('0');
  const [estimatedMinutes, setEstimatedMinutes] = useState('30');

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Create mutation
  const createMutation = trpc.chore.create.useMutation({
    onSuccess: async (newChore) => {
      // Generate schedules for the specified number of months (default 6)
      try {
        const startDate = new Date();
        const endDate = new Date();
        const monthsToSchedule = parseInt(scheduleMonths, 10);
        endDate.setMonth(endDate.getMonth() + monthsToSchedule);

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
    { label: 'Monthly', value: 'MONTHLY' },
  ];

  const monthOptions = [
    { label: '1 month', value: '1' },
    { label: '2 months', value: '2' },
    { label: '3 months', value: '3' },
    { label: '4 months', value: '4' },
    { label: '5 months', value: '5' },
    { label: '6 months', value: '6' },
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

  const toggleWeekday = (day: number) => {
    setSelectedWeekdays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day].sort()
    );
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    const recValueNum = parseInt(recurrenceValue, 10);
    if (isNaN(recValueNum) || recValueNum < 1) {
      newErrors.recurrenceValue = 'Must be at least 1';
    }

    if (recurrence === 'WEEKLY' && selectedWeekdays.length === 0) {
      newErrors.selectedWeekdays = 'Please select at least one day of the week';
    }

    const monthsNum = parseInt(scheduleMonths, 10);
    if (isNaN(monthsNum) || monthsNum < 1 || monthsNum > 6) {
      newErrors.scheduleMonths = 'Must be between 1 and 6 months';
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

  const addBulletPoint = () => {
    setDescriptionBullets([...descriptionBullets, '']);
  };

  const removeBulletPoint = (index: number) => {
    const newBullets = descriptionBullets.filter((_, i) => i !== index);
    setDescriptionBullets(newBullets.length === 0 ? [''] : newBullets);
  };

  const updateBulletPoint = (index: number, value: string) => {
    const newBullets = [...descriptionBullets];
    newBullets[index] = value;
    setDescriptionBullets(newBullets);
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const totalMinutes =
      parseInt(estimatedHours, 10) * 60 + parseInt(estimatedMinutes, 10);
    
    const scheduledTime = enableTime ? convertTo24Hour(hour, minute, period) : null;

    // Filter out empty bullet points
    const filteredBullets = descriptionBullets
      .map(b => b.trim())
      .filter(b => b.length > 0);

    createMutation.mutate({
      title: title.trim(),
      description: description.trim() || undefined,
      descriptionList: filteredBullets.length > 0 ? filteredBullets : undefined,
      householdId,
      recurrence: recurrence,
      recurrenceValue: parseInt(recurrenceValue, 10),
      selectedWeekdays: recurrence === 'WEEKLY' && selectedWeekdays.length > 0 ? selectedWeekdays : undefined,
      estimatedMinutes: totalMinutes > 0 ? totalMinutes : undefined,
      scheduledTime,
      isPrivate,
    });
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
      nestedScrollEnabled={false}
      removeClippedSubviews={false}
    >
      <View padding="lg" gap="lg" style={{ paddingBottom: 100 }}>
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

          {/* Description Bullet Points */}
          <View gap="xs">
            <Text weight="semibold">Task Breakdown (optional)</Text>
            <Text color="secondary" typography="caption">
              Add bullet points to break down the chore into steps
            </Text>
            {descriptionBullets.map((bullet, index) => (
              <View
                key={index}
                style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}
              >
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder={`Step ${index + 1}`}
                    value={bullet}
                    onChangeText={(value) => updateBulletPoint(index, value)}
                    inputMode="text"
                  />
                </View>
                {descriptionBullets.length > 1 && (
                  <Button
                    type="text"
                    intent="danger"
                    leftIcon="close"
                    onPress={() => removeBulletPoint(index)}
                    size="sm"
                  >
                    Remove
                  </Button>
                )}
              </View>
            ))}
            <Button
              type="outlined"
              leftIcon="plus"
              onPress={addBulletPoint}
              size="sm"
              alignSelf="flex-start"
            >
              Add Step
            </Button>
          </View>

          {/* Frequency */}
          <View gap="xs">
            <Text weight="semibold">Frequency *</Text>
            <View style={{ zIndex: 1000, elevation: 1000 }}>
              <Select
                value={recurrence}
                onChange={(value) => setRecurrence(value as RecurrenceType)}
                options={recurrenceOptions}
              />
            </View>
          </View>

          {/* Weekday Selection (only for Weekly) */}
          {recurrence === 'WEEKLY' && (
            <View gap="xs">
              <Text weight="semibold">Select Days of the Week *</Text>
              <Text color="secondary" typography="caption">
                Choose which days this chore should be scheduled
              </Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                {WEEKDAYS.map((day) => (
                  <Button
                    key={day.value}
                    type={selectedWeekdays.includes(day.value) ? 'filled' : 'outlined'}
                    intent={selectedWeekdays.includes(day.value) ? 'primary' : 'neutral'}
                    onPress={() => toggleWeekday(day.value)}
                    size="sm"
                  >
                    {day.label}
                  </Button>
                ))}
              </View>
              {errors.selectedWeekdays && (
                <Text color="danger" typography="caption">
                  {errors.selectedWeekdays}
                </Text>
              )}
            </View>
          )}

          {/* Recurrence Value (hidden for weekly with selected days) */}
          {!(recurrence === 'WEEKLY' && selectedWeekdays.length > 0) && (
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

          {/* Schedule Duration */}
          <View gap="xs">
            <Text weight="semibold">Schedule for *</Text>
            <View style={{ zIndex: 999, elevation: 999 }}>
              <Select
                value={scheduleMonths}
                onChange={setScheduleMonths}
                options={monthOptions}
              />
            </View>
            <Text color="secondary" typography="caption">
              Chores will be automatically scheduled for the selected duration
            </Text>
            {errors.scheduleMonths && (
              <Text color="danger" typography="caption">
                {errors.scheduleMonths}
              </Text>
            )}
          </View>

          {/* Scheduled Time */}
          <View gap="xs">
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text weight="semibold">Scheduled Time (optional)</Text>
              <Switch value={enableTime} onValueChange={setEnableTime} />
            </View>
            {enableTime && (
              <View style={{ flexDirection: 'row', gap: 8, alignItems: 'flex-start', zIndex: 998, elevation: 998 }}>
                <View style={{ flex: 1 }}>
                  <Select
                    value={hour}
                    onChange={setHour}
                    options={hourOptions}
                    placeholder="Hour"
                  />
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Text>:</Text>
                </View>
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
            )}
            <Text color="secondary" typography="caption">
              Set the time you want to complete this chore
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

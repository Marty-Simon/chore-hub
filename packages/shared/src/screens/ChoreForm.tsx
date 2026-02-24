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
  const [descriptionBullets, setDescriptionBullets] = useState<string[]>(['']);
  const [recurrence, setRecurrence] = useState<RecurrenceType>('WEEKLY');
  const [recurrenceValue, setRecurrenceValue] = useState('1');
  const [scheduleMonths, setScheduleMonths] = useState('6'); // Default to 6 months
  
  // Time slot 1
  const [hour1, setHour1] = useState('9');
  const [minute1, setMinute1] = useState('00');
  const [period1, setPeriod1] = useState<'AM' | 'PM'>('AM');
  const [enableTime1, setEnableTime1] = useState(false);
  
  // Time slot 2
  const [hour2, setHour2] = useState('3');
  const [minute2, setMinute2] = useState('00');
  const [period2, setPeriod2] = useState<'AM' | 'PM'>('PM');
  const [enableTime2, setEnableTime2] = useState(false);
  
  const [isPrivate, setIsPrivate] = useState(false);
  const [estimatedHours, setEstimatedHours] = useState('0');
  const [estimatedMinutes, setEstimatedMinutes] = useState('30');

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Create mutation
  const createMutation = trpc.chore.create.useMutation({
    onSuccess: async (newChore) => {
      // Generate schedules for the specified number of months
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

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    const recValueNum = parseInt(recurrenceValue, 10);
    if (isNaN(recValueNum) || recValueNum < 1) {
      newErrors.recurrenceValue = 'Must be at least 1';
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
    
    const preferredTime1 = enableTime1 ? convertTo24Hour(hour1, minute1, period1) : null;
    const preferredTime2 = enableTime2 ? convertTo24Hour(hour2, minute2, period2) : null;

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
      estimatedMinutes: totalMinutes > 0 ? totalMinutes : undefined,
      preferredTime1,
      preferredTime2,
      isPrivate,
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
            <Select
              value={recurrence}
              onChange={(value) => setRecurrence(value as RecurrenceType)}
              options={recurrenceOptions}
            />
          </View>

          {/* Recurrence Value */}
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

          {/* Schedule Duration */}
          <View gap="xs">
            <Text weight="semibold">Schedule for *</Text>
            <Select
              value={scheduleMonths}
              onChange={setScheduleMonths}
              options={monthOptions}
            />
            <Text color="secondary" typography="caption">
              How many months ahead should this chore be scheduled?
            </Text>
            {errors.scheduleMonths && (
              <Text color="danger" typography="caption">
                {errors.scheduleMonths}
              </Text>
            )}
          </View>

          {/* Preferred Time 1 */}
          <View gap="xs">
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text weight="semibold">Preferred Time #1 (optional)</Text>
              <Switch value={enableTime1} onValueChange={setEnableTime1} />
            </View>
            {enableTime1 && (
              <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Select
                    value={hour1}
                    onChange={setHour1}
                    options={hourOptions}
                    placeholder="Hour"
                  />
                </View>
                <Text>:</Text>
                <View style={{ flex: 1 }}>
                  <Select
                    value={minute1}
                    onChange={setMinute1}
                    options={minuteOptions}
                    placeholder="Min"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Select
                    value={period1}
                    onChange={(value) => setPeriod1(value as 'AM' | 'PM')}
                    options={periodOptions}
                  />
                </View>
              </View>
            )}
            <Text color="secondary" typography="caption">
              When is the best time to complete this chore?
            </Text>
          </View>

          {/* Preferred Time 2 */}
          <View gap="xs">
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text weight="semibold">Preferred Time #2 (optional)</Text>
              <Switch value={enableTime2} onValueChange={setEnableTime2} />
            </View>
            {enableTime2 && (
              <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Select
                    value={hour2}
                    onChange={setHour2}
                    options={hourOptions}
                    placeholder="Hour"
                  />
                </View>
                <Text>:</Text>
                <View style={{ flex: 1 }}>
                  <Select
                    value={minute2}
                    onChange={setMinute2}
                    options={minuteOptions}
                    placeholder="Min"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Select
                    value={period2}
                    onChange={(value) => setPeriod2(value as 'AM' | 'PM')}
                    options={periodOptions}
                  />
                </View>
              </View>
            )}
            <Text color="secondary" typography="caption">
              Add a second preferred time for flexibility
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

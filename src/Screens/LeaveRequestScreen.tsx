import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useTheme} from '@shopify/restyle';
import {Box, Text, Card, Button} from '../Components';
import {Theme} from '../Theme';

const LeaveRequestScreen = () => {
  const theme = useTheme<Theme>();
  const [leaveType, setLeaveType] = useState('annual');
  //   const [startDate, setStartDate] = useState('');
  //   const [endDate, setEndDate] = useState('');
  //   const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Handle navigation or success message
    }, 1500);
  };

  return (
    <Box flex={1} backgroundColor="lightGray">
      <ScrollView>
        <Box padding="m">
          <Card variant="primary" marginBottom="l">
            <Text variant="subtitle" color="primaryBlue" marginBottom="m">
              Leave Details
            </Text>

            <Box marginBottom="m">
              <Text variant="bodySmall" marginBottom="s">
                Leave Type
              </Text>

              <Box flexDirection="row" flexWrap="wrap" marginHorizontal="xs">
                {['annual', 'sick', 'emergency'].map(type => (
                  <Box key={type} marginHorizontal="xs" marginBottom="s">
                    <Button
                      label={type.charAt(0).toUpperCase() + type.slice(1)}
                      variant={leaveType === type ? 'primary' : 'outline'}
                      onPress={() => setLeaveType(type)}
                    />
                  </Box>
                ))}
              </Box>
            </Box>

            {/* <Input
              label="Start Date"
              placeholder="Select start date"
              value={startDate}
              onChangeText={setStartDate}
              rightIcon={
                <Feather
                  name="calendar"
                  size={20}
                  color={theme.colors.textSecondary}
                />
              }
            />

            <Input
              label="End Date"
              placeholder="Select end date"
              value={endDate}
              onChangeText={setEndDate}
              rightIcon={
                <Feather
                  name="calendar"
                  size={20}
                  color={theme.colors.textSecondary}
                />
              }
            />

            <Input
              label="Reason"
              placeholder="Enter reason for leave"
              value={reason}
              onChangeText={setReason}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            /> */}
          </Card>

          <Card variant="secondary" marginBottom="l">
            <Box flexDirection="row" alignItems="center">
              <Feather name="info" size={18} color={theme.colors.primaryBlue} />
              <Text variant="bodySmall" color="primaryBlue" marginLeft="s">
                Your remaining {leaveType} leave balance is{' '}
                {leaveType === 'annual'
                  ? '12'
                  : leaveType === 'sick'
                  ? '5'
                  : '3'}{' '}
                days.
              </Text>
            </Box>
          </Card>

          <Box flexDirection="row" justifyContent="space-between">
            <Box width="48%">
              <Button label="Cancel" variant="outline" onPress={() => {}} />
            </Box>
            <Box width="48%">
              <Button
                label="Submit Request"
                loading={loading}
                onPress={handleSubmit}
              />
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default LeaveRequestScreen;

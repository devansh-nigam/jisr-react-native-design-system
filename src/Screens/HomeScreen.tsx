import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {Feather} from '@expo/vector-icons';
import {useTheme} from '@shopify/restyle';
import {Box, Text, Card, Badge} from '../Components';
import {Theme} from '../Theme';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  //   const navigation = useNavigation();
  const theme = useTheme<Theme>();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.lightGray}}>
      <Box flex={1} backgroundColor="lightGray">
        <ScrollView>
          <Box padding="m">
            {/* Header with welcome message */}
            <Box
              backgroundColor="primaryBlue"
              padding="l"
              borderRadius={8}
              marginBottom="l">
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center">
                <Box>
                  <Text variant="title" color="white" marginBottom="xs">
                    Welcome back, Ahmed
                  </Text>
                  <Text variant="bodySmall" color="white" opacity={0.8}>
                    Thursday, April 17, 2025
                  </Text>
                </Box>
                <Box
                  backgroundColor="yellow"
                  width={40}
                  height={40}
                  borderRadius={20}
                  alignItems="center"
                  justifyContent="center">
                  {/* <Feather name="sun" size={24} color="white" /> */}
                </Box>
              </Box>
            </Box>

            {/* Quick Actions Section */}
            <Box marginBottom="l">
              <Text variant="subtitle" marginBottom="m">
                Quick Actions
              </Text>

              <Box flexDirection="row" flexWrap="wrap" marginHorizontal="s">
                <TouchableOpacity
                  style={{width: '50%', padding: theme.spacing.s}}
                  //onPress={() => navigation.navigate('LeaveRequest')}
                >
                  <Card
                    variant="interactive"
                    height={100}
                    justifyContent="center"
                    alignItems="center">
                    {/* <Feather
                    name="clock"
                    size={24}
                    color={theme.colors.primaryBlue}
                  /> */}
                    <Text variant="bodySmall" marginTop="s">
                      Leave Request
                    </Text>
                  </Card>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{width: '50%', padding: theme.spacing.s}}>
                  <Card
                    variant="interactive"
                    height={100}
                    justifyContent="center"
                    alignItems="center">
                    <Text variant="bodySmall" marginTop="s">
                      Punch Correction
                    </Text>
                  </Card>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{width: '50%', padding: theme.spacing.s}}>
                  <Card
                    variant="interactive"
                    height={100}
                    justifyContent="center"
                    alignItems="center">
                    {/* <Feather
                    name="file"
                    size={24}
                    color={theme.colors.primaryBlue}
                  /> */}
                    <Text variant="bodySmall" marginTop="s">
                      Document Request
                    </Text>
                  </Card>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{width: '50%', padding: theme.spacing.s}}>
                  <Card
                    variant="interactive"
                    height={100}
                    justifyContent="center"
                    alignItems="center">
                    {/* <Feather
                    name="plus-circle"
                    size={24}
                    color={theme.colors.primaryBlue}
                  /> */}
                    <Text variant="bodySmall" marginTop="s">
                      New Request
                    </Text>
                  </Card>
                </TouchableOpacity>
              </Box>
            </Box>

            {/* Summary Section */}
            <Box marginBottom="l">
              <Text variant="subtitle" marginBottom="m">
                Summary
              </Text>

              <Card variant="primary" marginBottom="m">
                <Box flexDirection="row" alignItems="center" marginBottom="m">
                  {/* <Feather
                  name="calendar"
                  size={20}
                  color={theme.colors.primaryBlue}
                /> */}
                  <Text variant="body" fontWeight="600" marginLeft="s">
                    Leave Balance
                  </Text>
                </Box>

                <Box flexDirection="row" justifyContent="space-between">
                  <Box>
                    <Text variant="caption">Annual Leave</Text>
                    <Text variant="subtitle" color="primaryBlue">
                      12 days
                    </Text>
                  </Box>

                  <Box>
                    <Text variant="caption">Sick Leave</Text>
                    <Text variant="subtitle" color="primaryBlue">
                      5 days
                    </Text>
                  </Box>

                  <Box>
                    <Text variant="caption">Emergency</Text>
                    <Text variant="subtitle" color="primaryBlue">
                      3 days
                    </Text>
                  </Box>
                </Box>
              </Card>

              <Card variant="primary">
                <Box flexDirection="row" alignItems="center" marginBottom="m">
                  {/* <Feather
                  name="clock"
                  size={20}
                  color={theme.colors.primaryBlue}
                /> */}
                  <Text variant="body" fontWeight="600" marginLeft="s">
                    Recent Activity
                  </Text>
                </Box>

                <Box>
                  <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingVertical="m"
                    borderBottomWidth={1}
                    borderBottomColor="lightGray">
                    <Box>
                      <Text variant="body">Leave Request</Text>
                      <Text variant="caption">Apr 10, 2025 - Apr 12, 2025</Text>
                    </Box>
                    <Badge label="Approved" type="success" />
                  </Box>

                  <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingVertical="m"
                    borderBottomWidth={1}
                    borderBottomColor="lightGray">
                    <Box>
                      <Text variant="body">Punch Correction</Text>
                      <Text variant="caption">Apr 5, 2025</Text>
                    </Box>
                    <Badge label="Pending" type="warning" />
                  </Box>

                  <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingVertical="m">
                    <Box>
                      <Text variant="body">Salary Certificate</Text>
                      <Text variant="caption">Mar 28, 2025</Text>
                    </Box>
                    <Badge label="Rejected" type="error" />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
        </ScrollView>

        <Box
          position="absolute"
          bottom={16}
          right={16}
          width={56}
          height={56}
          borderRadius={28}
          backgroundColor="primaryBlue"
          alignItems="center"
          justifyContent="center"
          shadowOpacity={0.2}
          shadowOffset={{width: 0, height: 4}}
          shadowRadius={8}
          elevation={5}>
          {/* <Feather name="plus" size={24} color="white" /> */}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;

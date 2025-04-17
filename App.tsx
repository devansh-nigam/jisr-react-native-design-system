// App.tsx
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// Add this import for react-native-screens
import {enableScreens} from 'react-native-screens';

// Call this function at the top level, before your component definition
enableScreens();

// Import theme from the correct location
import theme from './src/Theme';
import HomeScreen from './src/Screens/HomeScreen';
import LeaveRequestScreen from './src/Screens/LeaveRequestScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.primaryBlue}
        />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false, // Hide the default navigation header
              contentStyle: {
                backgroundColor: theme.colors.lightGray,
              },
            }}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Jisr Dashboard'}}
            />
            <Stack.Screen
              name="LeaveRequest"
              component={LeaveRequestScreen}
              options={{title: 'Leave Request'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

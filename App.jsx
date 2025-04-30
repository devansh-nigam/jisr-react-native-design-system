// App.js
import React from 'react';
import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import {ThemeProvider} from './src/theme/ThemeProvider';
import {Box, Button, Card, Text} from './src/components';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <Box p="lg">
            <Text variant="heading" size="3xl" mb="md">
              Design System Demo
            </Text>

            {/* <Box mb="xl">
              <Text variant="heading" size="xl" mb="md">
                Colors
              </Text>
              <Box flexDirection="row" flexWrap="wrap">
                {[
                  'primary',
                  'secondary',
                  'error',
                  'success',
                  'warning',
                  'information',
                ].map(color => (
                  <Box
                    key={color}
                    width={80}
                    height={80}
                    m="xs"
                    bg={`component.surface.${color}`}
                    borderRadius="md"
                    justifyContent="center"
                    alignItems="center">
                    <Text size="xs">{color}</Text>
                  </Box>
                ))}
              </Box>
            </Box> */}

            <Box mb="xl">
              <Text variant="heading" size="xl" mb="md">
                Colors
              </Text>
              <Box flexDirection="row" flexWrap="wrap">
                {[
                  {name: 'primary', color: 'component.surface.action'},
                  {name: 'secondary', color: 'component.surface.primary'},
                  {name: 'error', color: 'component.surface.error'},
                  {name: 'success', color: 'component.surface.success'},
                  {name: 'warning', color: 'component.surface.warning'},
                  {name: 'information', color: 'component.surface.information'},
                ].map(({name, color}) => (
                  <Box
                    key={name}
                    width={80}
                    height={80}
                    m="xs"
                    bg={color} // Use the direct component.surface reference
                    borderRadius="md"
                    justifyContent="center"
                    alignItems="center">
                    <Text
                      size="xs"
                      color={name === 'primary' ? 'on-action' : undefined}>
                      {name}
                    </Text>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box mb="xl">
              <Text variant="heading" size="xl" mb="md">
                Typography
              </Text>
              <Text variant="heading" size="3xl">
                Heading 3XL
              </Text>
              <Text variant="heading" size="2xl">
                Heading 2XL
              </Text>
              <Text variant="heading" size="xl">
                Heading XL
              </Text>
              <Text variant="heading" size="lg">
                Heading LG
              </Text>
              <Text variant="heading" size="md">
                Heading MD
              </Text>
              <Text variant="heading" size="sm">
                Heading SM
              </Text>
              <Box mt="md" />
              <Text size="lg">Body Large</Text>
              <Text size="md">Body Medium</Text>
              <Text size="sm">Body Small</Text>
              <Text size="xs">Body XSmall</Text>
            </Box>

            <Box mb="xl">
              <Text variant="heading" size="xl" mb="md">
                Buttons
              </Text>
              <Box mb="md">
                <Button size="lg" onPress={() => console.log('pressed')}>
                  Primary Large
                </Button>
              </Box>
              <Box mb="md">
                <Button onPress={() => console.log('pressed')}>
                  Primary Medium
                </Button>
              </Box>
              <Box mb="md">
                <Button size="sm" onPress={() => console.log('pressed')}>
                  Primary Small
                </Button>
              </Box>
              <Box mb="md">
                <Button
                  variant="outline"
                  onPress={() => console.log('pressed')}>
                  Outline
                </Button>
              </Box>
              <Box mb="md">
                <Button variant="ghost" onPress={() => console.log('pressed')}>
                  Ghost
                </Button>
              </Box>
              <Box mb="md">
                <Button variant="error" onPress={() => console.log('pressed')}>
                  Error
                </Button>
              </Box>
              <Box mb="md">
                <Button isDisabled onPress={() => console.log('pressed')}>
                  Disabled
                </Button>
              </Box>
              <Box mb="md">
                <Button isLoading onPress={() => console.log('pressed')}>
                  Loading
                </Button>
              </Box>
            </Box>

            <Box mb="xl">
              <Text variant="heading" size="xl" mb="md">
                Cards
              </Text>
              <Card mb="md">
                <Text variant="heading" size="lg" mb="xs">
                  Card Title
                </Text>
                <Text>
                  This is a simple card component that uses our theming system.
                  You can customize it with different variants and styles.
                </Text>
              </Card>
            </Box>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;

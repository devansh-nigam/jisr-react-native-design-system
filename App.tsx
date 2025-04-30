// App.js
import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import {ThemeProvider} from './src/theme/ThemeProvider';
import {Button} from './src/components/Button';
import {Card} from './src/components/Card';
import {Typography} from './src/components/Typography';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Typography variant="h2">Design System Demo</Typography>
            <Typography variant="subtitle" style={styles.subtitle}>
              Using style-dictionary with your design tokens
            </Typography>

            <View style={styles.section}>
              <Typography variant="h4">Typography</Typography>
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="body">
                Body text that demonstrates the default text style in the
                application. This text is using the tokens from our design
                system.
              </Typography>
              <Typography variant="caption">
                Caption text is smaller and lighter
              </Typography>
            </View>

            <View style={styles.section}>
              <Typography variant="h4">Buttons</Typography>
              <View style={styles.buttonRow}>
                <Button title="Primary Button" onPress={() => {}} />
                <Button title="Disabled" disabled onPress={() => {}} />
              </View>
            </View>

            <View style={styles.section}>
              <Typography variant="h4">Cards</Typography>
              <Card title="Card Component">
                <Typography variant="body">
                  This card is styled using our design tokens. It includes
                  proper spacing, border radius, and colors from our token
                  system.
                </Typography>
                <Button
                  title="Card Action"
                  onPress={() => {}}
                  style={styles.cardButton}
                />
              </Card>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

// These styles could also use the theme tokens,
// but here we're keeping them simple for clarity
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 24,
  },
  section: {
    marginVertical: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 12,
    flexWrap: 'wrap',
    gap: 12,
  },
  cardButton: {
    marginTop: 16,
    alignSelf: 'flex-start',
  },
});

export default App;

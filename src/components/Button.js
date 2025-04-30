// src/components/Button.js
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTheme} from '../theme/ThemeProvider';
import {
  useColor,
  useSpacing,
  useBorderRadius,
  useTypography,
  createStyles,
} from '../theme/utils';

export const Button = ({
  onPress,
  title,
  variant = 'primary',
  disabled = false,
  style,
  textStyle,
}) => {
  const {theme} = useTheme();

  // Use hook-based access to tokens
  const primaryColor = useColor('componentTokens.surface.action');
  const textColor = useColor('componentTokens.text.on-action');
  const disabledColor = useColor('componentTokens.surface.disabled');
  const disabledTextColor = useColor('componentTokens.text.disabled');
  const borderRadius = useBorderRadius('md');
  const paddingHorizontal = useSpacing('component.md');
  const paddingVertical = useSpacing('component.sm');
  const fontSize = useTypography('fontSize.md');
  const fontWeight = useTypography('fontWeight.medium');

  // Alternative: use createStyles helper for more complex components
  const styles = createStyles(theme =>
    StyleSheet.create({
      button: {
        backgroundColor: disabled
          ? theme.componentTokens.surface.disabled.value
          : theme.componentTokens.surface.action.value,
        paddingHorizontal: theme.primitiveTokens.spacing.scale[4].value,
        paddingVertical: theme.primitiveTokens.spacing.scale[3].value,
        borderRadius: theme.primitiveTokens.borderRadius.md.value,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: disabled
          ? theme.componentTokens.text.disabled.value
          : theme.componentTokens.text.on - action.value,
        fontSize: theme.primitiveTokens.typography.fontSize.md.value,
        fontWeight: theme.primitiveTokens.typography.fontWeight.medium.value,
      },
    }),
  );

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

// src/components/Card.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '../theme/ThemeProvider';
import {createStyles} from '../theme/utils';

export const Card = ({title, children, style}) => {
  const styles = createStyles(theme =>
    StyleSheet.create({
      container: {
        backgroundColor: theme.componentTokens.surface.primary.value,
        borderRadius: theme.primitiveTokens.borderRadius.lg.value,
        padding: theme.aliasTokens.spacing.component.lg.value,
        borderWidth: theme.primitiveTokens.borderWidth.xs.value,
        borderColor: theme.componentTokens.border.primary.value,
        shadowColor: theme.primitiveTokens.colors.black[500].value,
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
      },
      title: {
        color: theme.componentTokens.text.heading.value,
        fontSize: theme.primitiveTokens.typography.fontSize.xl.value,
        fontWeight: theme.primitiveTokens.typography.fontWeight.semibold.value,
        marginBottom: theme.aliasTokens.spacing.component.md.value,
      },
      content: {
        color: theme.componentTokens.text.body.value,
      },
    }),
  );

  return (
    <View style={[styles.container, style]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

// src/components/Typography.js
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useTheme} from '../theme/ThemeProvider';
import {createStyles} from '../theme/utils';

export const Typography = ({variant = 'body', children, style}) => {
  const {theme} = useTheme();

  const styles = createStyles(theme => {
    const baseStyles = {
      color: theme.componentTokens.text.body.value,
      fontFamily: theme.primitiveTokens.typography.fontFamily.primary.value,
    };

    return StyleSheet.create({
      h1: {
        ...baseStyles,
        fontSize: theme.primitiveTokens.typography.fontSize['6xl'].value,
        fontWeight: theme.primitiveTokens.typography.fontWeight.bold.value,
        color: theme.componentTokens.text.heading.value,
        letterSpacing:
          theme.primitiveTokens.typography.letterSpacing.tight.value,
      },
      h2: {
        ...baseStyles,
        fontSize: theme.primitiveTokens.typography.fontSize['5xl'].value,
        fontWeight: theme.primitiveTokens.typography.fontWeight.bold.value,
        color: theme.componentTokens.text.heading.value,
        letterSpacing:
          theme.primitiveTokens.typography.letterSpacing.tight.value,
      },
      h3: {
        ...baseStyles,
        fontSize: theme.primitiveTokens.typography.fontSize['4xl'].value,
        fontWeight: theme.primitiveTokens.typography.fontWeight.semibold.value,
        color: theme.componentTokens.text.heading.value,
      },
      h4: {
        ...baseStyles,
        fontSize: theme.primitiveTokens.typography.fontSize['3xl'].value,
        fontWeight: theme.primitiveTokens.typography.fontWeight.semibold.value,
        color: theme.componentTokens.text.heading.value,
      },
      h5: {
        ...baseStyles,
        fontSize: theme.primitiveTokens.typography.fontSize['2xl'].value,
        fontWeight: theme.primitiveTokens.typography.fontWeight.semibold.value,
        color: theme.componentTokens.text.heading.value,
      },
      body: {
        ...baseStyles,
        fontSize: theme.primitiveTokens.typography.fontSize.md.value,
        fontWeight: theme.primitiveTokens.typography.fontWeight.regular.value,
      },
      subtitle: {
        ...baseStyles,
        fontSize: theme.primitiveTokens.typography.fontSize.lg.value,
        fontWeight: theme.primitiveTokens.typography.fontWeight.medium.value,
      },
      caption: {
        ...baseStyles,
        fontSize: theme.primitiveTokens.typography.fontSize.sm.value,
        color: theme.componentTokens.text.disabled.value,
      },
    });
  });

  return <Text style={[styles[variant], style]}>{children}</Text>;
};

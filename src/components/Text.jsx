// src/components/Text.js
import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {useTheme} from '../theme/ThemeProvider';

export const Text = ({
  variant = 'body',
  size = 'md',
  color,
  weight,
  style,
  children,
  ...props
}) => {
  const theme = useTheme();

  const getColorValue = () => {
    if (!color) {
      return variant === 'heading'
        ? theme.colors.component.text.heading
        : theme.colors.component.text.body;
    }

    if (color.includes('.')) {
      // Handle dot notation for nested color values
      const parts = color.split('.');
      return parts.reduce((obj, part) => obj[part], theme.colors);
    }

    // Handle simple color names
    return theme.colors.component.text[color] || color;
  };

  const getFontSize = () => {
    switch (variant) {
      case 'heading':
        return theme.typography.fontSize(size);
      case 'label':
        return theme.typography.fontSize(size);
      default:
        return theme.typography.fontSize(size);
    }
  };

  const getFontWeight = () => {
    if (weight) return theme.typography.fontWeight(weight);

    switch (variant) {
      case 'heading':
        return theme.typography.fontWeight('semibold');
      case 'label':
        return theme.typography.fontWeight('medium');
      default:
        return theme.typography.fontWeight('regular');
    }
  };

  return (
    <RNText
      style={[
        {
          color: getColorValue(),
          fontSize: getFontSize(),
          fontWeight: getFontWeight(),
        },
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

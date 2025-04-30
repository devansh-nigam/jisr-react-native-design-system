// src/components/Card.js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '../theme/ThemeProvider';
import {Box} from './Box';

export const Card = ({
  variant = 'primary',
  p = 'md',
  borderRadius = 'md',
  style,
  children,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Box
      bg="primary"
      p={p}
      borderRadius={borderRadius}
      style={[
        {
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
        style,
      ]}
      {...props}>
      {children}
    </Box>
  );
};

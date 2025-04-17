import React from 'react';
import Box from './Box';
import Text from './Text';
import {Theme} from '../theme';

type BadgeType = 'success' | 'error' | 'warning' | 'info';

interface BadgeProps {
  label: string;
  type?: BadgeType;
  size?: 'small' | 'medium';
}

const Badge = ({label, type = 'info', size = 'medium'}: BadgeProps) => {
  const getBackgroundColor = (): keyof Theme['colors'] => {
    switch (type) {
      case 'success':
        return 'success';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'info':
      default:
        return 'info';
    }
  };

  return (
    <Box
      paddingHorizontal={size === 'small' ? 'xs' : 's'}
      paddingVertical={size === 'small' ? 'xs' : 'xs'}
      borderRadius={16}
      backgroundColor={getBackgroundColor()}
      alignSelf="flex-start">
      <Text
        color="white"
        variant={size === 'small' ? 'caption' : 'bodySmall'}
        fontWeight="500">
        {label}
      </Text>
    </Box>
  );
};

export default Badge;

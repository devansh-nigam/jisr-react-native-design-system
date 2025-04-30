// src/components/Button.js
import React from 'react';
import {TouchableOpacity, ActivityIndicator, StyleSheet} from 'react-native';
import {useTheme} from '../theme/ThemeProvider';
import {Text} from './Text';
import {Box} from './Box';

export const Button = ({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  isLoading,
  isDisabled,
  onPress,
  style,
  children,
  ...props
}) => {
  const theme = useTheme();

  const getBackgroundColor = () => {
    if (isDisabled) return theme.colors.component.surface.disabled;

    switch (variant) {
      case 'primary':
        return theme.colors.component.surface.action;
      case 'outline':
        return 'transparent';
      case 'ghost':
        return 'transparent';
      case 'error':
        return theme.colors.component.surface.error;
      default:
        return theme.colors.component.surface.action;
    }
  };

  const getBorderColor = () => {
    if (isDisabled) return theme.colors.component.border.disabled;

    switch (variant) {
      case 'primary':
        return 'transparent';
      case 'outline':
        return theme.colors.component.border.action;
      case 'ghost':
        return 'transparent';
      case 'error':
        return theme.colors.component.border.error;
      default:
        return 'transparent';
    }
  };

  const getTextColor = () => {
    if (isDisabled) return theme.colors.component.text.disabled;

    switch (variant) {
      case 'primary':
        return theme.colors.component.text['on-action'];
      case 'outline':
      case 'ghost':
        return theme.colors.component.text.action;
      case 'error':
        return theme.colors.component.text.error;
      default:
        return theme.colors.component.text['on-action'];
    }
  };

  const getPadding = () => {
    switch (size) {
      case 'xs':
        return {
          paddingVertical: theme.spacing.component('xxs'),
          paddingHorizontal: theme.spacing.component('xs'),
        };
      case 'sm':
        return {
          paddingVertical: theme.spacing.component('xs'),
          paddingHorizontal: theme.spacing.component('sm'),
        };
      case 'md':
        return {
          paddingVertical: theme.spacing.component('sm'),
          paddingHorizontal: theme.spacing.component('md'),
        };
      case 'lg':
        return {
          paddingVertical: theme.spacing.component('md'),
          paddingHorizontal: theme.spacing.component('lg'),
        };
      default:
        return {
          paddingVertical: theme.spacing.component('sm'),
          paddingHorizontal: theme.spacing.component('md'),
        };
    }
  };

  const {paddingVertical, paddingHorizontal} = getPadding();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled || isLoading}
      style={[
        {
          backgroundColor: getBackgroundColor(),
          borderWidth: variant === 'outline' ? theme.borderWidth('xs') : 0,
          borderColor: getBorderColor(),
          borderRadius: theme.borderRadius('md'),
          paddingVertical,
          paddingHorizontal,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: theme.sizes.component(size),
        },
        style,
      ]}
      {...props}>
      {isLoading ? (
        <ActivityIndicator
          color={getTextColor()}
          size={size === 'xs' || size === 'sm' ? 'small' : 'large'}
        />
      ) : (
        <>
          {leftIcon && <Box mr="xs">{leftIcon}</Box>}

          <Text
            color={getTextColor()}
            size={size === 'xs' ? 'xs' : size === 'sm' ? 'sm' : 'md'}
            weight="medium">
            {children}
          </Text>

          {rightIcon && <Box ml="xs">{rightIcon}</Box>}
        </>
      )}
    </TouchableOpacity>
  );
};

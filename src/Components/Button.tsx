import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {
  useTheme,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import Text from './Text';
import Box from './Box';
import {Theme, ButtonVariant} from '../theme';

const ButtonContainer = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({themeKey: 'buttonVariants'})], Box);

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  label,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
}: ButtonProps) => {
  const theme = useTheme<Theme>();

  const getTextColor = () => {
    if (disabled) return 'textDisabled';
    switch (variant) {
      case 'primary':
        return 'white';
      case 'secondary':
        return 'primaryBlue';
      case 'outline':
        return 'primaryBlue';
      default:
        return 'white';
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={disabled ? {opacity: 0.6} : null}>
      <ButtonContainer variant={variant}>
        <Box flexDirection="row" alignItems="center" justifyContent="center">
          {leftIcon && <Box marginRight="s">{leftIcon}</Box>}

          {loading ? (
            <ActivityIndicator
              size="small"
              color={
                variant === 'primary'
                  ? theme.colors.white
                  : theme.colors.primaryBlue
              }
            />
          ) : (
            <Text variant="button" color={getTextColor()}>
              {label}
            </Text>
          )}

          {rightIcon && <Box marginLeft="s">{rightIcon}</Box>}
        </Box>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default Button;

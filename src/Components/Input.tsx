import React, {useState} from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import {useTheme} from '@shopify/restyle';
import Box from './Box';
import Text from './Text';
import {Theme} from '../Theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helper?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = ({
  label,
  error,
  helper,
  leftIcon,
  rightIcon,
  ...rest
}: InputProps) => {
  const theme = useTheme<Theme>();
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (error) return theme.colors.error;
    if (isFocused) return theme.colors.primaryBlue;
    return theme.colors.textDisabled;
  };

  return (
    <Box marginBottom="m">
      {label && (
        <Text variant="bodySmall" marginBottom="xs">
          {label}
        </Text>
      )}

      <Box
        flexDirection="row"
        alignItems="center"
        borderWidth={1}
        borderColor={getBorderColor()}
        borderRadius={8}
        paddingHorizontal="m"
        backgroundColor="white"
        height={48}>
        {leftIcon && <Box marginRight="s">{leftIcon}</Box>}

        <TextInput
          style={styles.input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={theme.colors.textDisabled}
          {...rest}
        />

        {rightIcon && <Box marginLeft="s">{rightIcon}</Box>}
      </Box>

      {(error || helper) && (
        <Text
          variant="caption"
          color={error ? 'error' : 'textSecondary'}
          marginTop="xs">
          {error || helper}
        </Text>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
});

export default Input;

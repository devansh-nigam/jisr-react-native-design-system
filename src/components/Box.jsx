// src/components/Box.js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '../theme/ThemeProvider';

export const Box = ({
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  bg,
  backgroundColor,
  borderRadius,
  borderWidth,
  borderColor,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  alignSelf,
  style,
  children,
  ...props
}) => {
  const theme = useTheme();

  const getSpacingValue = value => {
    if (
      typeof value === 'string' &&
      ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'].includes(value)
    ) {
      return theme.spacing.component(value);
    }
    return value;
  };

  const getBgColor = () => {
    const background = bg || backgroundColor;
    if (!background) return undefined;

    if (background.includes('.')) {
      // Handle dot notation
      const parts = background.split('.');
      return parts.reduce((obj, part) => obj[part], theme.colors);
    }

    if (theme.colors.component.surface[background]) {
      return theme.colors.component.surface[background];
    }

    return background;
  };

  const getBorderRadiusValue = () => {
    if (!borderRadius) return undefined;
    if (typeof borderRadius === 'string') {
      return theme.borderRadius(borderRadius);
    }
    return borderRadius;
  };

  const getBorderWidthValue = () => {
    if (!borderWidth) return undefined;
    if (typeof borderWidth === 'string') {
      return theme.borderWidth(borderWidth);
    }
    return borderWidth;
  };

  const getBorderColorValue = () => {
    if (!borderColor) return undefined;

    if (borderColor.includes('.')) {
      // Handle dot notation
      const parts = borderColor.split('.');
      return parts.reduce((obj, part) => obj[part], theme.colors);
    }

    if (theme.colors.component.border[borderColor]) {
      return theme.colors.component.border[borderColor];
    }

    return borderColor;
  };

  return (
    <View
      style={[
        {
          padding: getSpacingValue(p),
          paddingHorizontal: getSpacingValue(px),
          paddingVertical: getSpacingValue(py),
          paddingTop: getSpacingValue(pt),
          paddingRight: getSpacingValue(pr),
          paddingBottom: getSpacingValue(pb),
          paddingLeft: getSpacingValue(pl),

          margin: getSpacingValue(m),
          marginHorizontal: getSpacingValue(mx),
          marginVertical: getSpacingValue(my),
          marginTop: getSpacingValue(mt),
          marginRight: getSpacingValue(mr),
          marginBottom: getSpacingValue(mb),
          marginLeft: getSpacingValue(ml),

          backgroundColor: getBgColor(),
          borderRadius: getBorderRadiusValue(),
          borderWidth: getBorderWidthValue(),
          borderColor: getBorderColorValue(),

          width,
          height,
          minWidth,
          minHeight,
          maxWidth,
          maxHeight,
          flex,
          flexDirection,
          justifyContent,
          alignItems,
          alignSelf,
        },
        style,
      ]}
      {...props}>
      {children}
    </View>
  );
};

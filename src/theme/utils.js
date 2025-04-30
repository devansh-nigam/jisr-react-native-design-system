// src/theme/utils.js
import {useTheme} from './ThemeProvider.js';

// Utility function to get a specific token by path
export const getToken = (tokenPath, theme) => {
  if (!tokenPath) return undefined;

  const path = tokenPath.split('.');
  let result = theme;

  for (const segment of path) {
    if (result && result[segment] !== undefined) {
      result = result[segment];
    } else {
      console.warn(`Token not found: ${tokenPath}`);
      return undefined;
    }
  }

  // If the token has a 'value' property, return that value
  if (result && typeof result === 'object' && result.value !== undefined) {
    return result.value;
  }

  return result;
};

// Hooks for accessing specific token types
export const useColor = colorPath => {
  const {theme} = useTheme();
  // Check in different token categories in order of specificity
  if (colorPath.startsWith('component')) {
    return getToken(colorPath, theme.componentTokens);
  }
  if (colorPath.startsWith('alias')) {
    return getToken(colorPath, theme.aliasTokens);
  }
  return getToken(colorPath, theme.primitiveTokens.colors);
};

export const useSpacing = spacingPath => {
  const {theme} = useTheme();
  if (spacingPath.startsWith('component')) {
    return getToken(spacingPath, theme.componentTokens);
  }
  if (spacingPath.startsWith('alias')) {
    return getToken(spacingPath, theme.aliasTokens.spacing);
  }
  return getToken(spacingPath, theme.primitiveTokens.spacing);
};

export const useTypography = typographyPath => {
  const {theme} = useTheme();
  return getToken(typographyPath, theme.primitiveTokens.typography);
};

export const useBorderRadius = radiusPath => {
  const {theme} = useTheme();
  return getToken(radiusPath, theme.primitiveTokens.borderRadius);
};

// Helper to create full style objects
export const createStyles = stylesFn => {
  const {theme} = useTheme();
  return stylesFn(theme);
};

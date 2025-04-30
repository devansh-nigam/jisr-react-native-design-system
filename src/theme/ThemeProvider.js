// src/theming/ThemeProvider.js
import React, {createContext, useContext} from 'react';
import {getTokenByMode} from '../../theme'; // Import from your generated tokens file

// Create the theme context
const ThemeContext = createContext(null);

// Create a hook for easy access to theme tokens
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({children}) => {
  // Create our theme object with helper functions
  const theme = {
    colors: {
      // Primary colors
      primary: (shade = 'default') =>
        getTokenByMode(`alias.colors.primary.${shade}`, 'alias tokens'),
      secondary: (shade = 'default') =>
        getTokenByMode(`alias.colors.secondary.${shade}`, 'alias tokens'),

      // Semantic colors
      error: (shade = 'default') =>
        getTokenByMode(`alias.colors.error.${shade}`, 'alias tokens'),
      success: (shade = 'default') =>
        getTokenByMode(`alias.colors.success.${shade}`, 'alias tokens'),
      warning: (shade = 'default') =>
        getTokenByMode(`alias.colors.warning.${shade}`, 'alias tokens'),
      information: (shade = 'default') =>
        getTokenByMode(`alias.colors.information.${shade}`, 'alias tokens'),
      neutral: (shade = 'default') =>
        getTokenByMode(`alias.colors.neutral.${shade}`, 'alias tokens'),

      // Component-specific colors
      component: {
        text: {
          body: getTokenByMode(
            'component.text.body',
            'mapped (component) tokens',
          ),
          heading: getTokenByMode(
            'component.text.heading',
            'mapped (component) tokens',
          ),
          action: getTokenByMode(
            'component.text.action',
            'mapped (component) tokens',
          ),
          error: getTokenByMode(
            'component.text.error',
            'mapped (component) tokens',
          ),
          disabled: getTokenByMode(
            'component.text.disabled',
            'mapped (component) tokens',
          ),
        },
        surface: {
          primary: getTokenByMode(
            'component.surface.primary',
            'mapped (component) tokens',
          ),
          action: getTokenByMode(
            'component.surface.action',
            'mapped (component) tokens',
          ),
          error: getTokenByMode(
            'component.surface.error',
            'mapped (component) tokens',
          ),
          page: getTokenByMode(
            'component.surface.page',
            'mapped (component) tokens',
          ),
        },
        border: {
          primary: getTokenByMode(
            'component.border.primary',
            'mapped (component) tokens',
          ),
          focus: getTokenByMode(
            'component.border.focus',
            'mapped (component) tokens',
          ),
          error: getTokenByMode(
            'component.border.error',
            'mapped (component) tokens',
          ),
        },
        icon: {
          primary: getTokenByMode(
            'component.icon.primary',
            'mapped (component) tokens',
          ),
          error: getTokenByMode(
            'component.icon.error',
            'mapped (component) tokens',
          ),
        },
      },
    },

    spacing: {
      component: size =>
        getTokenByMode(`alias.spacing.component.${size}`, 'alias tokens'),
      section: size =>
        getTokenByMode(`alias.spacing.section.${size}`, 'alias tokens'),
    },

    sizes: {
      icon: size =>
        getTokenByMode(`primitive.size.icon.${size}`, 'primitive tokens'),
      component: size =>
        getTokenByMode(`primitive.size.component.${size}`, 'primitive tokens'),
      container: size =>
        getTokenByMode(`primitive.size.container.${size}`, 'primitive tokens'),
    },

    borderRadius: size =>
      getTokenByMode(`primitive.borderRadius.${size}`, 'primitive tokens'),
    borderWidth: size =>
      getTokenByMode(`primitive.borderWidth.${size}`, 'primitive tokens'),
    opacity: level =>
      getTokenByMode(`primitive.opacity.${level}`, 'primitive tokens'),

    typography: {
      fontSize: size =>
        getTokenByMode(
          `primitive.typography.fontSize.${size}`,
          'primitive tokens',
        ),
      fontWeight: weight =>
        getTokenByMode(
          `primitive.typography.fontWeight.${weight}`,
          'primitive tokens',
        ),
      // Fixed the mode parameter from 'primtive tokens' to 'primitive tokens'
      //   letterSpacing: spacing =>
      //     getTokenByMode(
      //       `primitive.typography.letterSpacing.${spacing}`,
      //       'primitive tokens',
      //     ),
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

import {createTheme} from '@shopify/restyle';

const palette = {
  // Primary Colors
  primaryBlue: '#2256DC',
  white: '#FFFFFF',
  yellow: '#FFBD3D',
  lightBlue: '#EBF3FF',

  // Secondary Colors
  teal: '#36D6D6',
  darkGray: '#333333',
  lightGray: '#F5F5F5',

  // Functional Colors
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FFC107',
  info: '#2196F3',

  // Text Variations
  textPrimary: '#333333',
  textSecondary: '#757575',
  textDisabled: '#BDBDBD',

  // Transparency
  transparentBlue: 'rgba(34, 86, 220, 0.1)',
  transparentYellow: 'rgba(255, 189, 61, 0.1)',
};

// Spacing system (in pixels)
const spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
  '2xl': 48,
  '3xl': 64,
};

// Breakpoints for responsive design
const breakpoints = {
  phone: 0,
  tablet: 768,
};

// Text Variants
const textVariants = {
  header: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 42.5,
    color: 'textPrimary',
  },
  subheader: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 36,
    color: 'textPrimary',
  },
  title: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 28,
    color: 'textPrimary',
  },
  subtitle: {
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: 'textPrimary',
  },
  body: {
    fontFamily: 'System',
    fontSize: 16,
    lineHeight: 24,
    color: 'textPrimary',
  },
  bodySmall: {
    fontFamily: 'System',
    fontSize: 14,
    lineHeight: 20,
    color: 'textSecondary',
  },
  caption: {
    fontFamily: 'System',
    fontSize: 12,
    lineHeight: 16,
    color: 'textSecondary',
  },
  button: {
    fontFamily: 'System',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: 'white',
  },
};

// Card Variants
const cardVariants = {
  primary: {
    backgroundColor: 'white',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 15,
    elevation: 5,
    borderRadius: 8,
    padding: 'm',
  },
  secondary: {
    backgroundColor: 'lightBlue',
    borderRadius: 8,
    padding: 'm',
  },
  interactive: {
    backgroundColor: 'white',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 15,
    elevation: 5,
    borderRadius: 8,
    padding: 'm',
    borderLeftWidth: 4,
    borderLeftColor: 'primaryBlue',
  },
};

// Button Variants
const buttonVariants = {
  primary: {
    backgroundColor: 'primaryBlue',
    padding: 'm',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondary: {
    backgroundColor: 'transparentBlue',
    padding: 'm',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outline: {
    backgroundColor: 'white',
    padding: 'm',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'primaryBlue',
  },
  icon: {
    padding: 's',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const theme = createTheme({
  colors: palette,
  spacing,
  breakpoints,
  textVariants,
  cardVariants,
  buttonVariants,
});

export type Theme = typeof theme;
export type TextVariant = keyof typeof textVariants;
export type CardVariant = keyof typeof cardVariants;
export type ButtonVariant = keyof typeof buttonVariants;
export type Spacing = keyof typeof spacing;
export type Color = keyof typeof palette;

export default theme;

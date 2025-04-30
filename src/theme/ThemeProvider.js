// src/theme/ThemeProvider.js
import React, {createContext, useContext, useState} from 'react';
import {primitiveTokens} from './primitiveTokens';
import {aliasTokens} from './aliasTokens';
import {componentTokens} from './componentTokens';

// Create a theme object by combining all token types
const createTheme = () => {
  return {
    primitiveTokens,
    aliasTokens,
    componentTokens,
    // Add any additional theme logic here
  };
};

// Create the context
export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(createTheme());

  // You could add logic here for theme switching if needed
  const updateTheme = newTheme => {
    setTheme({
      ...theme,
      ...newTheme,
    });
  };

  return (
    <ThemeContext.Provider value={{theme, updateTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

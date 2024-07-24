import React, { createContext, useState, useContext } from 'react';

// Create the context
const ThemeContext = createContext();

// Create a custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is light

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = theme === 'light'
    ? {
        background: 'bg-white',
        text: 'text-gray-900',
        border: 'border-gray-200',
      }
    : {
        background: 'bg-gray-900',
        text: 'text-gray-100',
        border: 'border-gray-700',
      };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

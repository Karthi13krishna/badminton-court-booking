import React, { useContext, createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme('Light');
  }, []);

  return (
    <ThemeContext.Provider value={(theme, setTheme)}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

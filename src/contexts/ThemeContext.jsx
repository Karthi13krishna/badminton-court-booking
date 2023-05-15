import React, { useContext, createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  return (
    <ThemeContext.Provider value={(theme, setTheme)}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

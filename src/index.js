import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './contexts/AuthContext';
import { SlotContextProvider } from './contexts/SlotContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SlotContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </SlotContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

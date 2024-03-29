import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './contexts/AuthContext';
import { SlotContextProvider } from './contexts/SlotContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SlotContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeContextProvider>
      </SlotContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

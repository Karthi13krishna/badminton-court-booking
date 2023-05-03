import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './contexts/AuthContext';
import { SlotContextProvider } from './contexts/SlotContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SlotContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SlotContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

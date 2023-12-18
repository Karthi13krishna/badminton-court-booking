import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const RedirectRoutes = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/profile" /> : <Outlet />;
};

export default RedirectRoutes;

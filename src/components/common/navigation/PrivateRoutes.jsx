import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const PrivateRoutes = () => {
  const { pathname } = useLocation();
  const { currentUser } = useAuth();
  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{ from: pathname, warning: 'Please login before proceeding!' }}
    />
  );
};

export default PrivateRoutes;

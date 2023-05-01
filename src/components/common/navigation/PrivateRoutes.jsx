import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { auth } from '../../../config/firebase';

const PrivateRoutes = () => {
  const { pathname } = useLocation();
  return auth?.currentUser?.uid ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{ from: pathname, warning: 'Please login before proceeding!' }}
    />
  );
};

export default PrivateRoutes;

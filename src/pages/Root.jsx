import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/common/navigation/Navigation';
import Footer from '../components/common/footer/Footer';

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

import React, { useEffect, useState } from 'react';
import { auth } from '../../../config/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import styles from './AuthButton.module.scss';

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth?.currentUser?.uid) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  const signInHandler = () => {
    navigate('/login');
  };

  const signOutHandler = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const authHandler = async () => {
    if (isLoggedIn) {
      signOutHandler();
    } else {
      signInHandler();
    }
  };

  return (
    <button className={styles.btn} onClick={authHandler}>
      {isLoggedIn ? 'Sign Out' : 'Sign In'}
    </button>
  );
};

export default AuthButton;

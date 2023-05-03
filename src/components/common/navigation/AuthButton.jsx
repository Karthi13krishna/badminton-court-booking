import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

import styles from './AuthButton.module.scss';

const AuthButton = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const signInHandler = () => {
    navigate('/login');
  };

  const profileHandler = () => {
    navigate('/profile');
  };

  return (
    <>
      {currentUser ? (
        <BsPersonCircle className={styles.profile} onClick={profileHandler} />
      ) : (
        <button className={styles.btn} onClick={signInHandler}>
          Sign In
        </button>
      )}
    </>
  );
};

export default AuthButton;

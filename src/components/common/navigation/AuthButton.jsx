import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

import styles from './AuthButton.module.scss';

const AuthButton = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const signInHandler = () => {
    navigate('/login');
  };

  return (
    <>
      {currentUser ? (
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? `${styles.active} ${styles.profile}`
              : styles.profile;
          }}
          to="/profile"
        >
          <BsPersonCircle />
        </NavLink>
      ) : (
        <button className={styles.btn} onClick={signInHandler}>
          Sign In
        </button>
      )}
    </>
  );
};

export default AuthButton;

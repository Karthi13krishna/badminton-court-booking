import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../contexts/AuthContext';
import Input from '../Input';

import styles from './SignIn.module.scss';

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { from, warning } = location.state
    ? location.state
    : { from: '/profile', warning: null };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useAuth();

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate(from);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.warning}>{warning}</h3>
      <form onSubmit={signInHandler} className={styles.form}>
        <Input
          label="Email"
          id="email"
          required={true}
          type="email"
          onInputChange={setEmail}
          value={email}
        />
        <Input
          label="Password"
          id="password"
          required={true}
          type="password"
          onInputChange={setPassword}
          value={password}
        />
        <button className={styles['submit-btn']}>Sign In</button>
      </form>
      <p className={styles['signup-link']}>
        Not a User? <Link to="/register">Register now!</Link>
      </p>
    </div>
  );
};

export default SignIn;

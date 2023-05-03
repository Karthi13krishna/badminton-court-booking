import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../contexts/AuthContext';

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
        <div>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            required
            className={styles.input}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            id="password"
            name="password"
            className={styles.input}
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button className={styles['submit-btn']}>Sign In</button>
      </form>
      <p className={styles['signup-link']}>
        Not a User? <Link to="/register">Register now!</Link>
      </p>
    </div>
  );
};

export default SignIn;

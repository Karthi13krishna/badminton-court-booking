import React from 'react';
import { useState } from 'react';
import { auth } from '../../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

import styles from './SignUp.module.scss';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.card}>
      <form onSubmit={signUpHandler} className={styles.form}>
        <div>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            required
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
            className={styles.input}
            id="password"
            name="password"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button className={styles['submit-btn']}>Sign Up</button>
      </form>
      <p className={styles['signup-link']}>
        Already a User? <Link to="/login">Login now!</Link>
      </p>
    </div>
  );
};

export default SignUp;

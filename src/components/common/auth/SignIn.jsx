import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ImGoogle } from 'react-icons/im';

import { useAuth } from '../../../contexts/AuthContext';
import { db } from '../../../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
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
  const [error, setError] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const { loginUser, loginWithGoogle } = useAuth();

  const emailValidation = () => {
    if (email.trim() !== '' && email.includes('@') && !error) {
      setEmailIsValid(true);
    }
  };
  const passwordValidation = () => {
    if (password.trim() !== '' && !error) {
      setPasswordIsValid(true);
    }
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    emailValidation();
    passwordValidation();
    if (!passwordIsValid || !emailIsValid) {
      throw new Error('Please enter a valid email and password');
    }
    try {
      await loginUser(email, password);
      navigate(from);
    } catch (err) {
      setError(err);

      console.error(err);
    }
  };

  const googleSignInHandler = async () => {
    try {
      const { user } = await loginWithGoogle();
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          email: user.email,
          firstName: user.displayName.split(' ')[0],
          lastName: user.displayName.split(' ')[1],
          isAdmin: false,
          isMember: false,
          uid: user.uid,
        });
      }
      navigate(from);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.warning}>{warning}</h3>
      <form onSubmit={signInHandler} className={styles.form}>
        {error && (
          <p className={styles['error-text']}>Username or Password Invalid</p>
        )}
        <Input
          label="Email"
          className={`${!error ? '' : 'error'}`}
          id="email"
          required={true}
          type="email"
          onInputChange={setEmail}
          value={email}
          error={error}
        />
        <Input
          label="Password"
          className={`${!error ? '' : 'error'}`}
          id="password"
          required={true}
          type="password"
          onInputChange={setPassword}
          value={password}
        />
        <div className={styles.buttons}>
          <button className={styles['submit-btn']}>Sign In</button>
          <button
            onClick={googleSignInHandler}
            type="button"
            className={styles['submit-btn']}
          >
            <ImGoogle /> Sign in With Google
          </button>
        </div>
      </form>
      <p className={styles['signup-link']}>
        Not a User? <Link to="/register">Register now!</Link>
      </p>
    </div>
  );
};

export default SignIn;

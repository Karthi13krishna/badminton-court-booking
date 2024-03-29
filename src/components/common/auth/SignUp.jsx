import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

import styles from './SignUp.module.scss';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import Input from '../Input';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(null);
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state ? location.state : { from: '/profile' };

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUser(email, password, firstName, lastName);
      await updateProfile(user, { displayName: `${firstName} ${lastName}` });
      await setDoc(doc(db, 'users', user.uid), {
        email,
        firstName,
        lastName,
        isAdmin: false,
        isMember: false,
        uid: user.uid,
      });
      navigate(from);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  return (
    <div className={styles.card}>
      <form onSubmit={signUpHandler} className={styles.form}>
        {error && (
          <p className={styles['error-text']}>Please enter valid data</p>
        )}
        <Input
          label="First Name"
          className={`${!error ? '' : 'error'}`}
          id="firstName"
          required={true}
          onInputChange={setFirstName}
          value={firstName}
        />
        <Input
          label="Last Name"
          className={`${!error ? '' : 'error'}`}
          id="lastName"
          required={true}
          onInputChange={setLastName}
          value={lastName}
        />
        <Input
          label="Email"
          className={`${!error ? '' : 'error'}`}
          id="email"
          required={true}
          type="email"
          onInputChange={setEmail}
          value={email}
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
        <button className={styles['submit-btn']}>Sign Up</button>
      </form>
      <p className={styles['signup-link']}>
        Already a User? <Link to="/login">Login now!</Link>
      </p>
    </div>
  );
};

export default SignUp;

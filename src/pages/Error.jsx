import React from 'react';
import styles from './Error.module.scss';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className={styles.grid}>
      <h1 className={styles.heading}>404</h1>
      <div className={styles.subtext}>Page not found!</div>
      <Link to="/" className={styles.button}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default Error;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <header className={styles.nav}>
      <div className={styles.logo}>Logo</div>
      <nav>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/slot">Book a Slot</Link>
          </li>
          <li className={styles.link}>
            <Link to="/membership">Membership</Link>
          </li>
          <li className={styles.link}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

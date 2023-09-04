import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.flex}>
        <div>
          <Link to="/" className={styles.logo}>
            <h3>DKS</h3>
          </Link>
        </div>
        <div>
          <h3>Pages</h3>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles['list-item']}>
              <Link to="/about">About</Link>
            </li>
            <li className={styles['list-item']}>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Link to="/slot">Slot Booking</Link>
            </li>
            <li className={styles['list-item']}>
              <Link to="/membership">Membership</Link>
            </li>
            <li className={styles['list-item']}>
              <Link to="/coaching">Coaching</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p className={styles.address}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://goo.gl/maps/6HNMjNNrNh1apo2q7"
            >
              No 37, near SRM school, Pankaja Ammal Nagar, <br /> Nandhivaram,
              Tamil Nadu 603202
            </a>
          </p>
          <p className={styles.phone}>09840021814</p>
        </div>
      </div>
      <div>Copyright &copy; {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;

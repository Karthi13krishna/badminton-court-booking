import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import styles from './Navigation.module.scss';
import AuthButton from './AuthButton';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const menuHandler = () => {
    setIsNavOpen((navState) => !navState);
  };

  return (
    <header className={`${styles.header} ${styles.container}`}>
      <Link to="/" className={styles.logo}>
        <div>DKS</div>
      </Link>
      <button className={styles['nav-toggle']} onClick={menuHandler}>
        {isNavOpen ? (
          <HiOutlineX className={styles.menu} />
        ) : (
          <HiOutlineMenu className={styles.menu} />
        )}
      </button>
      <nav className={`${styles['nav']} ${isNavOpen && styles.visible}`}>
        <ul className={styles['nav__list']} onClick={() => setIsNavOpen(false)}>
          <li className={styles['nav__item']}>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? styles.active : '';
              }}
            >
              Home
            </NavLink>
          </li>
          <li className={styles['nav__item']}>
            <NavLink
              to="/slot"
              className={({ isActive }) => {
                return isActive ? styles.active : '';
              }}
            >
              Book Slots
            </NavLink>
          </li>
          <li className={styles['nav__item']}>
            <NavLink
              to="/membership"
              className={({ isActive }) => {
                return isActive ? styles.active : '';
              }}
            >
              Membership
            </NavLink>
          </li>
          <li className={styles['nav__item']}>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? styles.active : '';
              }}
            >
              About
            </NavLink>
          </li>
          <li className={styles['nav__item']}>
            <AuthButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './AuthOverlay.module.scss';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';

const ModalOverlay = ({ open, setOpen }) => {
  const [child, setChild] = useState('login');
  if (!open) return null;

  const closeModal = () => {
    setOpen(false);
  };

  return createPortal(
    <div className={styles.backdrop}>
      <button
        className={styles['close-btn']}
        type="button"
        onClick={closeModal}
      >
        X
      </button>
      <div className={styles.modal}>
        {child === 'login' ? (
          <SignIn fromModal={true} setChild={setChild} />
        ) : (
          <SignUp fromModal={true} setChild={setChild} />
        )}
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default ModalOverlay;

import React from 'react';
import SlotBooking from '../components/bookASlot/SlotBooking';
import Container from '../components/common/Container';

import styles from './BookASlot.module.scss';

const BookASlot = () => {
  return (
    <Container>
      <div className={styles.form}>
        <SlotBooking />
      </div>
    </Container>
  );
};

export default BookASlot;

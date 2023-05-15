import React from 'react';
import SlotBooking from '../components/bookSlots/SlotBooking';
import Container from '../components/common/Container';

import styles from './BookSlots.module.scss';

const BookSlots = () => {
  return (
    <Container>
      <div className={styles.form}>
        <SlotBooking />
      </div>
    </Container>
  );
};

export default BookSlots;

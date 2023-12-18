import React from 'react';
import { format } from 'date-fns';
import styles from './DisplaySlots.module.scss';
import { BsCalendar2Check, BsClock } from 'react-icons/bs';

const DisplaySlots = ({ slot }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.date}>
          <BsCalendar2Check className={styles['calendar-icon']} />
          {format(slot.timeStamp, 'cccc, PP')}
        </div>
        <div className={styles.date}>
          <BsClock className={styles['calendar-icon']} />
          {format(slot.timeStamp, 'p')}
        </div>
      </div>
    </>
  );
};

export default DisplaySlots;

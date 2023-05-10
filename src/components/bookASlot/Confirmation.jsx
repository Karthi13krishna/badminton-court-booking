import React from 'react';

import styles from './Confirmation.module.scss';
import { compareAsc, format } from 'date-fns';
import { BsCalendar2Check } from 'react-icons/bs';

import { useAuth } from '../../contexts/AuthContext';
import { useSlots } from '../../contexts/SlotContext';

const Confirmation = () => {
  const { currentUser } = useAuth();
  const { selectedSlots } = useSlots();
  const times = selectedSlots.sort((a, b) => compareAsc(a, b));
  const dateTime = times.map((time) => {
    return (
      <li className={styles.slots} key={time}>
        {format(time, 'PPPPp')}
      </li>
    );
  });

  return (
    <div className={styles.confirmation}>
      <div>
        <BsCalendar2Check className={styles['calendar-icon']} />
      </div>
      <h3 className={styles.heading}>
        {!selectedSlots.length
          ? 'Please select a time!'
          : !currentUser
          ? 'Please Login before confirming!'
          : 'Please confirm the slots you have selected'}
      </h3>
      {selectedSlots.length && currentUser ? <ul>{dateTime}</ul> : null}
    </div>
  );
};

export default Confirmation;

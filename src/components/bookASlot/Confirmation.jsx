import React from 'react';

import styles from './Confirmation.module.scss';
import { compareAsc, format } from 'date-fns';
import { BsCalendar2Check } from 'react-icons/bs';

import { useSlots } from '../../contexts/SlotContext';

const Confirmation = () => {
  const { selectedSlots } = useSlots();
  const times = selectedSlots.sort((a, b) => compareAsc(a, b));
  const dateTime = times.map((time) => {
    return (
      <p className={styles.slots} key={time}>
        {format(time, 'PPPPp')}
      </p>
    );
  });

  return (
    <div className={styles.confirmation}>
      <div>
        <BsCalendar2Check className={styles['calendar-icon']} />
      </div>
      <h3 className={styles.heading}>
        {selectedSlots.length
          ? 'Please confirm the slots you have selected'
          : 'Please select a time!'}
      </h3>
      <div>{selectedSlots.length ? dateTime : null}</div>
    </div>
  );
};

export default Confirmation;

import React from 'react';

import styles from './Confirmation.module.scss';
import { compareAsc, format } from 'date-fns';
import { BsCalendar2Check } from 'react-icons/bs';

const Confirmation = ({ selectedTimes }) => {
  const times = selectedTimes.sort((a, b) => compareAsc(a, b));
  const dateTime = times.map((time) => {
    return (
      <div className={styles.slots} key={time}>
        {format(time, 'PPPPp')}
      </div>
    );
  });

  return (
    <div className={styles.confirmation}>
      <div>
        <BsCalendar2Check className={styles['calendar-icon']} />
      </div>
      <h3 className={styles.heading}>
        {selectedTimes.length
          ? 'Please confirm the slots you have selected'
          : 'Please select a date!'}
      </h3>
      <div>{selectedTimes.length ? dateTime : null}</div>
    </div>
  );
};

export default Confirmation;

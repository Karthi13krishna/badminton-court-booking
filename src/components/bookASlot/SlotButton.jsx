import React, { useState, useEffect } from 'react';
import styles from './SlotButton.module.scss';
import { format, compareAsc } from 'date-fns';

const SlotsButton = ({ selectedTimes, label, onSelect }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const getSelectedTime = () => {
      return selectedTimes.find((time) => compareAsc(time, label) === 0)
        ? true
        : false;
    };

    if (getSelectedTime()) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [label, selectedTimes]);

  const slotHandler = () => {
    onSelect(label);
  };

  const classes = `${styles['slot-btn']} ${isActive ? styles.active : ''}`;

  return (
    <button type="button" onClick={slotHandler} className={classes}>
      {format(label, 'p')}
    </button>
  );
};

export default SlotsButton;

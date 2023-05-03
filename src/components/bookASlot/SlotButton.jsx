import React, { useState, useEffect } from 'react';
import styles from './SlotButton.module.scss';
import { format, isSameHour } from 'date-fns';
import { useSlots } from '../../contexts/SlotContext';

const SlotsButton = ({ label, onSelect }) => {
  const [isActive, setIsActive] = useState(false);
  const { selectedSlots } = useSlots();

  useEffect(() => {
    const getSelectedTime = () => {
      return selectedSlots.find((time) => isSameHour(time, label));
    };

    if (getSelectedTime()) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [label, selectedSlots]);

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

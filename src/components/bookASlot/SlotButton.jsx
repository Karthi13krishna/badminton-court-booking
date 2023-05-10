import React, { useState, useEffect } from 'react';
import styles from './SlotButton.module.scss';
import { format, isSameHour } from 'date-fns';
import { useSlots } from '../../contexts/SlotContext';

const SlotsButton = ({ label, onSelect, disabledSlots }) => {
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { selectedSlots } = useSlots();

  useEffect(() => {
    const isDisabled = () => {
      return disabledSlots.find((time) => isSameHour(time.timeStamp, label));
    };

    if (isDisabled()) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    const getSelectedTime = () => {
      return selectedSlots.find((time) => isSameHour(time, label));
    };
    if (getSelectedTime()) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [label, selectedSlots, disabledSlots]);

  const slotHandler = () => {
    onSelect(label);
  };

  const classes = `${styles['slot-btn']} ${isActive ? styles.active : ''}`;

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={slotHandler}
      className={classes}
    >
      {format(label, 'p')}
    </button>
  );
};

export default SlotsButton;

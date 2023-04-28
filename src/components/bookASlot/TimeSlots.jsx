import React, { useState } from 'react';
import { add, eachHourOfInterval, isToday } from 'date-fns';
import styles from './TimeSlots.module.scss';
import SlotsButton from './SlotButton';

const TimeSlots = ({
  onTimeChange,
  date,
  selectedTimes,
  setNumberOfHours,
  numberOfHours,
}) => {
  const [activeSlot, setActiveSlot] = useState(date);

  const activeSlotHandler = (slot) => {
    setActiveSlot(slot);
    onTimeChange(slot);
  };

  const getTimes = () => {
    const start = isToday(date)
      ? add(new Date().setMinutes(0, 0), { hours: 1 })
      : add(date, { hours: 6 });
    const end = add(date, { hours: 22 });

    const times = eachHourOfInterval({ start, end });
    return times;
  };

  const times = getTimes();

  const timeSlots = times.map((time) => {
    return (
      <SlotsButton
        label={time}
        key={time}
        onSelect={activeSlotHandler}
        activeSlot={activeSlot}
        selectedTimes={selectedTimes}
      />
    );
  });

  return (
    <>
      <div className={styles['number-of-hours']}>
        <label htmlFor="hours" className={styles['hours-label']}>
          Select Number of Hours:{' '}
        </label>
        <select
          className={styles.hours}
          name="hours"
          id="hours"
          form="slots"
          onChange={(e) => setNumberOfHours(e.target.value)}
          value={numberOfHours}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className={styles.grid}>{timeSlots}</div>
    </>
  );
};

export default TimeSlots;

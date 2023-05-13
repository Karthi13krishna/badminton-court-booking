import React, { useEffect, useState } from 'react';
import { add, eachHourOfInterval, isToday } from 'date-fns';
import { MoonLoader } from 'react-spinners';
import styles from './TimeSlots.module.scss';
import SlotsButton from './SlotButton';
import { useSlots } from '../../contexts/SlotContext';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../config/firebase';

const TimeSlots = () => {
  const { date, setNumberOfHours, numberOfHours, slotChangeHandler } =
    useSlots();
  const [activeSlot, setActiveSlot] = useState(date);
  const [disabledSlots, setDisabledSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  const start = isToday(date)
    ? add(new Date().setMinutes(0, 0), { hours: 1 })
    : add(date, { hours: 6 });
  const end = add(date, { hours: 22 });

  const times = eachHourOfInterval({ start, end });

  useEffect(() => {
    const q = query(
      collection(db, 'timeSlots'),
      where('slot', '>=', start),
      where('slot', '<=', end),
      orderBy('slot', 'asc')
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let slotArr = [];
      querySnapshot.forEach((doc) => {
        slotArr.push({
          timeStamp: doc.data().slot.seconds * 1000,
          id: doc.id,
          uid: doc.data().uid,
        });
        setDisabledSlots(slotArr);
      });
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const activeSlotHandler = (slot) => {
    setActiveSlot(slot);
    slotChangeHandler(slot, numberOfHours);
  };

  const timeSlots = times.map((time) => {
    return (
      <SlotsButton
        label={time}
        key={time}
        onSelect={activeSlotHandler}
        activeSlot={activeSlot}
        disabledSlots={disabledSlots}
      />
    );
  });

  if (loading)
    return (
      <div className={styles.loader}>
        <MoonLoader color="#42ffad" />
      </div>
    );

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

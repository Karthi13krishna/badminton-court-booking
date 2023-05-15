import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import { add } from 'date-fns';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import { FiCheck } from 'react-icons/fi';

import { useMultiStepForm } from '../../hooks/useMultiStepForm';
import { useSlots } from '../../contexts/SlotContext';
import { useAuth } from '../../contexts/AuthContext';

import '../../styles/react-calendar.scss';
import styles from './SlotBooking.module.scss';
import TimeSlots from './TimeSlots';
import Confirmation from './Confirmation';
import { useNavigate } from 'react-router-dom';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';

const SlotBooking = () => {
  const { currentUser } = useAuth();
  const {
    today,
    date,
    setDate,
    selectedSlots,
    setSelectedSlots,
    numberOfHours,
    setNumberOfHours,
  } = useSlots();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedSlots([]);
  }, [date, setSelectedSlots]);

  useEffect(() => {
    if (numberOfHours < selectedSlots.length) {
      setSelectedSlots([]);
    }
  }, [numberOfHours, selectedSlots.length, setSelectedSlots]);

  const datePicker = (
    <Calendar
      view="month"
      minDate={today}
      maxDate={add(today, { days: 30 })}
      onChange={(date) => setDate(date)}
      value={date}
    />
  );
  const timePicker = <TimeSlots />;
  const confirmation = <Confirmation selectedTimes={selectedSlots} />;

  const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } =
    useMultiStepForm([datePicker, timePicker, confirmation]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (selectedSlots) {
      selectedSlots.forEach(async (slot) => {
        await addDoc(collection(db, 'timeSlots'), {
          uid: currentUser.uid,
          slot: Timestamp.fromDate(slot),
        });
      });
      setSelectedSlots([]);
      setDate(today);
      setNumberOfHours(1);
      navigate('/profile');
    } else {
      console.log('Please select a time');
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className={styles.form} id="slots">
        <div className={styles['step-number']}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        <div className={styles.step}>{step}</div>
        <div className={styles['form-buttons']}>
          {!isFirstStep && (
            <button
              onClick={back}
              type="button"
              className={styles['form-nav-btns']}
            >
              <HiArrowNarrowLeft
                className={`${styles.arrow} ${styles['arrow-back']}`}
              />
            </button>
          )}
          {!isLastStep && (
            <button
              onClick={next}
              type="button"
              className={`${styles['form-nav-btns']} ${styles['arrow-next']}`}
            >
              <HiArrowNarrowRight className={styles.arrow} />
            </button>
          )}
          {isLastStep && (
            <button
              type="submit"
              className={styles['form-nav-btns']}
              disabled={selectedSlots.length && currentUser ? false : true}
            >
              <FiCheck className={`${styles.arrow} ${styles['arrow-next']}`} />
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default SlotBooking;

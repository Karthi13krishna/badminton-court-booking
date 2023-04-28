import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { add, isSameHour } from 'date-fns';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import { FiCheck } from 'react-icons/fi';

import TimeSlots from './TimeSlots';
import { useMultiStepForm } from '../../hooks/useMultiStepForm';

import '../../styles/react-calendar.scss';
import styles from './SlotBooking.module.scss';
import Confirmation from './Confirmation';
import { useEffect } from 'react';

const SlotBooking = () => {
  let today = new Date(new Date().setHours(0, 0, 0));
  today = new Date().getHours() < 21 ? today : add(today, { days: 1 });
  const [date, setDate] = useState(today);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [numberOfHours, setNumberOfHours] = useState(1);

  useEffect(() => {
    setSelectedTimes([]);
  }, [date]);

  useEffect(() => {
    if (numberOfHours < selectedTimes.length) {
      setSelectedTimes([]);
    }
  }, [numberOfHours, selectedTimes.length]);

  const timeChangeHandler = (slot) => {
    const duplicateSlot = selectedTimes.find((time) => isSameHour(time, slot));

    if (duplicateSlot) {
      setSelectedTimes((prevSelectedTimes) => {
        return prevSelectedTimes.filter((time) => !isSameHour(time, slot));
      });
    } else {
      setSelectedTimes((prevSelectedTimes) => {
        prevSelectedTimes.push(slot);
        if (prevSelectedTimes.length > numberOfHours) {
          prevSelectedTimes.shift();
        }
        return prevSelectedTimes;
      });
    }
  };

  const datePicker = (
    <Calendar
      view="month"
      minDate={today}
      maxDate={add(today, { days: 30 })}
      onChange={(date) => setDate(date)}
      value={date}
    />
  );
  const timePicker = (
    <TimeSlots
      onTimeChange={timeChangeHandler}
      date={date}
      selectedTimes={selectedTimes}
      setNumberOfHours={setNumberOfHours}
      numberOfHours={numberOfHours}
    />
  );
  const confirmation = <Confirmation selectedTimes={selectedTimes} />;

  const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } =
    useMultiStepForm([datePicker, timePicker, confirmation]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (selectedTimes) {
      console.log(selectedTimes);
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
              disabled={selectedTimes.length ? false : true}
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

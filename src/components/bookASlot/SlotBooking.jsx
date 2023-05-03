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

const SlotBooking = () => {
  const { currentUser } = useAuth();
  const {
    today,
    date,
    setDate,
    selectedSlots,
    setSelectedSlots,
    numberOfHours,
    formStepNumber,
    setFormStepNumber,
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

  const {
    steps,
    currentStepIndex,
    step,
    next,
    back,
    isFirstStep,
    isLastStep,
    goTo,
  } = useMultiStepForm([datePicker, timePicker, confirmation]);

  useEffect(() => {
    setFormStepNumber(currentStepIndex);
  }, [currentStepIndex, setFormStepNumber]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (selectedSlots) {
      if (currentUser) {
        console.log(selectedSlots); //add database logic here!
        setSelectedSlots([]);
        setDate(today);
        goTo(0);
      } else {
        navigate('/login', {
          state: {
            from: '/slot',
            warning: 'Please login before booking!',
            step: formStepNumber,
          },
        });
      }
    } else {
      console.log('Please select a time');
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className={styles.form} id="slots">
        <div className={styles['step-number']}>
          {formStepNumber + 1}/{steps.length}
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
              disabled={selectedSlots.length ? false : true}
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

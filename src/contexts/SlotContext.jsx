import { useState, useContext, createContext } from 'react';

import { add, isSameHour } from 'date-fns';

const SlotContext = createContext();

export const SlotContextProvider = ({ children }) => {
  //states for handling slots
  let today = new Date(new Date().setHours(0, 0, 0));
  today = new Date().getHours() < 21 ? today : add(today, { days: 1 });
  const [date, setDate] = useState(today);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [numberOfHours, setNumberOfHours] = useState(1);
  const [formStepNumber, setFormStepNumber] = useState(0);

  //functions for handling slots
  const slotChangeHandler = (slot, numberOfHours) => {
    const duplicateSlot = selectedSlots.find((time) => isSameHour(time, slot));

    if (duplicateSlot) {
      setSelectedSlots((prevSelectedTimes) => {
        return prevSelectedTimes.filter((time) => !isSameHour(time, slot));
      });
    } else {
      setSelectedSlots((prevSelectedTimes) => {
        prevSelectedTimes.push(slot);
        if (prevSelectedTimes.length > numberOfHours) {
          prevSelectedTimes.shift();
        }
        return prevSelectedTimes;
      });
    }
  };

  const value = {
    today,
    date,
    setDate,
    selectedSlots,
    setSelectedSlots,
    slotChangeHandler,
    numberOfHours,
    setNumberOfHours,
    formStepNumber,
    setFormStepNumber,
  };

  return <SlotContext.Provider value={value}>{children}</SlotContext.Provider>;
};

export const useSlots = () => {
  return useContext(SlotContext);
};

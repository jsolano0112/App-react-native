import React, { createContext, useContext, useState } from 'react';

const HourContext = createContext();

export const UserProvider = ({ hours }) => {
  const [hoursWorked, setHoursWorked] = useState([]);

  return (
    <HourContext.Provider value={{ hoursWorked, setHoursWorked }}>
      {hours}
    </HourContext.Provider>
  );
};

export const useHourContext = () => {
  return useContext(HourContext);
};

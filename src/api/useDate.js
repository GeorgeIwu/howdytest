import React from "react";
import { format as formatDate, addMinutes, startOfToday, startOfDay, addDays } from 'date-fns';


const useDate = (fromDate = startOfToday()) => {
  const dateTimes = Array.from(Array(48), (_, i) => i);

  const weekDates = Array.from(Array(7), (_, index) => {
    const current = addDays(startOfDay(fromDate), index)
    const dates = dateTimes.map(dateTime => addMinutes(current, (dateTime * 30)))


    return {
      dates,
      name: formatDate(current, "eee"),
    }
  });

  return {
    weekDates,
    formatDate,
  };
};

export default useDate

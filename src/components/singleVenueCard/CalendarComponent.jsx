import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setReservedDates } from "./setReservedDates";

export function CalendarComponent(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  setReservedDates(props.setReservedDates);
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      excludeDateIntervals={[
        {
          start: new Date("2023-11-25"),
          end: new Date("2023-11-27"),
        },
      ]}
      selectsRange
      selectsDisabledDaysInRange
    />
  );
}

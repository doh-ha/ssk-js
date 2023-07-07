import React from "react";

import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ date, setDate }) => {
  return (
    <>
      <DateTimePicker
        value={date}
        mode="date"
        display="spinner"
        onChange={() => {}}
        themeVariant="light" // IOS only
        style={{}} // IOS only
      />
    </>
  );
};

export default DatePicker;

import React from "react";

import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ date, setDate, onChange }) => {
  return (
    <>
      <DateTimePicker
        value={date}
        mode="date"
        display="spinner"
        onChange={onChange}
        themeVariant="light" // IOS only
        style={{ width: "90%", alignSelf: "center" }} // IOS only
      />
    </>
  );
};

export default DatePicker;

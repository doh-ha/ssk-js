import React, { useEffect, useRef, useState } from "react";

import BottomSheet from "../common/BottomSheet";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Platform, View } from "react-native";
import ConfirmButtons from "../common/ConfirmButtons";
import color from "../../common/color";

const Container = ({ children, onBSheetClose, setIsConfirmed }) => {
  const ref = useRef();

  useEffect(() => {
    ref?.current?.open();
  }, []);

  const onClose = () => {
    onBSheetClose();
  };

  const onConfirm = () => {
    setIsConfirmed(true);
    ref?.current?.close();
  };
  const onCancel = () => {
    setIsConfirmed(false);
    ref?.current?.close();
  };

  if (Platform.OS === "android") {
    return <>{children}</>;
  } else {
    return (
      <BottomSheet rbRef={ref} heightPercentage={0.4} onClose={onClose}>
        <View>{children}</View>
        <ConfirmButtons
          confirmText={"선택"}
          buttonColor={color.COLOR_MAIN}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      </BottomSheet>
    );
  }
};

const CalendarDatePicker = ({
  selectedDate,
  setShowPicker,
  handlePickDate,
}) => {
  const [date, setDate] = useState(selectedDate);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const onChange = ({ type }, date) => {
    // console.log("onChange: ", Platform.OS, type, date);

    if (Platform.OS === "android") {
      if (type === "set") {
        handlePickDate(date);
      } else {
        setShowPicker(false);
      }
    } else {
      setDate(date);
    }
  };

  const onBSheetClose = () => {
    setShowPicker(false);
  };

  useEffect(() => {
    if (isConfirmed) {
      handlePickDate(date);
    }
  }, [isConfirmed]);

  return (
    <Container onBSheetClose={onBSheetClose} setIsConfirmed={setIsConfirmed}>
      <DateTimePicker
        value={selectedDate}
        mode="date"
        display="spinner"
        themeVariant="light" // IOS only
        onChange={onChange}
        style={{ width: "80%", alignSelf: "center" }} // IOS only
      />
    </Container>
  );
};

export default CalendarDatePicker;

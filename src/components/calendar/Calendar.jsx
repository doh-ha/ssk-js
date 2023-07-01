import React, { useState } from "react";
import styled from "styled-components/native";

import color from "../../common/color";

import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import CalendarDatePicker from "./CalendarDatePicker";

const Calendar = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedYear, setSelectedYear] = useState(year);

  const [showPicker, setShowPicker] = useState(false);

  // dir = -1: 이전달, 1: 다음달
  const handleMoveMonth = (dir) => {
    if (selectedMonth === 1 && dir === -1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else if (selectedMonth === 12 && dir === 1) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + dir);
    }
  };

  const handlePressDate = (date) => {
    setSelectedDate(date);
  };

  const handlePressToday = () => {
    setSelectedDate(today);
    setSelectedMonth(month);
    setSelectedYear(year);
  };

  const handleToggleShowPicker = () => {
    setShowPicker(!showPicker);
  };

  const handlePickDate = (date) => {
    setShowPicker(false);

    setSelectedDate(date);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    setSelectedMonth(month);
    setSelectedYear(year);
  };

  return (
    <Container>
      <CalendarHeader
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        handleMoveMonth={handleMoveMonth}
        handleToggleShowPicker={handleToggleShowPicker}
      />
      <TodayButton onPress={handlePressToday}>
        <TodayText>today</TodayText>
      </TodayButton>
      <CalendarBody
        selectedDate={selectedDate}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        handlePressDate={handlePressDate}
        handleMoveMonth={handleMoveMonth}
      />

      {showPicker && (
        <CalendarDatePicker
          setShowPicker={setShowPicker}
          selectedDate={selectedDate}
          handlePickDate={handlePickDate}
        />
      )}
    </Container>
  );
};

export default Calendar;

const Container = styled.View`
  background-color: ${color.COLOR_WHITE_BACKGROUND};
`;

const TodayButton = styled.Pressable`
  align-self: flex-end;
  border-color: ${color.COLOR_MAIN};
  border-width: 1;
  border-radius: 100;
  padding-horizontal: 7;
  padding-vertical: 3;
  margin-right: 10;
  margin-bottom: 10;
`;

const TodayText = styled.Text`
  font-size: 12;
  color: ${color.COLOR_MAIN};
`;

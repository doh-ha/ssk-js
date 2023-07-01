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

  // 선택한 날짜
  const [selectedDate, setSelectedDate] = useState(today);
  // 선택한 월
  const [selectedMonth, setSelectedMonth] = useState(month);
  // 선택한 년
  const [selectedYear, setSelectedYear] = useState(year);

  // date picker 보여짐 여부
  const [showPicker, setShowPicker] = useState(false);

  // 헤더 chevron 아이콘 클릭 시 실행되는 이벤트 함수
  // 월 이동
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

  // 날짜 타일 클릭 시 실행되는 이벤트 함수
  const handlePressDate = (date) => {
    setSelectedDate(date);
  };

  // today 버튼 클릭 시 실행되는 이벤트 함수
  const handlePressToday = () => {
    setSelectedDate(today);
    setSelectedMonth(month);
    setSelectedYear(year);
  };

  // 헤더 글씨 클릭 시 실행되는 이벤트 함수
  const handleToggleShowPicker = () => {
    setShowPicker(!showPicker);
  };

  // date picker 에서 날짜 선택 시 실행되는 이벤트 함수
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
      {/* 년 & 월 보여주는 캘린더 헤더 */}
      <CalendarHeader
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        handleMoveMonth={handleMoveMonth}
        handleToggleShowPicker={handleToggleShowPicker}
      />

      {/* 오늘 날짜로 이동하는 버튼 */}
      <TodayButton onPress={handlePressToday}>
        <TodayText>today</TodayText>
      </TodayButton>

      {/* 캘린더 바디 */}
      <CalendarBody
        selectedDate={selectedDate}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        handlePressDate={handlePressDate}
        handleMoveMonth={handleMoveMonth}
      />

      {/* 캘린더 Date Picker 컴포넌트 */}
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

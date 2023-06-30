import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components/native";

import { FlatList } from "react-native";
import color from "../../common/color";
import { CalendarStates, Days } from "../../constants/calendar";
import { compareDates, dateFormat, getTotalDays } from "../../utils/date";

const CalendarDays = () => {
  const renderItem = ({ item }) => {
    return (
      <CalendarDay>
        <CalendarDayText state={item.state}>{item.text}</CalendarDayText>
      </CalendarDay>
    );
  };
  return (
    <FlatList
      data={Days}
      numColumns={7}
      renderItem={renderItem}
      keyExtractor={(item) => `${item.state}_${item.text}`}
      scrollEnabled={false}
    />
  );
};

const CalendarBody = ({
  selectedDate,
  selectedMonth,
  selectedYear,
  handlePressDate,
}) => {
  const today = new Date();
  const [totalDays, setTotalDays] = useState([]);

  useEffect(() => {
    const days = getTotalDays(selectedMonth, selectedYear);
    setTotalDays(days);
  }, [selectedMonth, selectedYear]);

  const renderItem = ({ item }) => {
    return (
      <CalendarDay
        today={compareDates(today, item.date)}
        selected={compareDates(selectedDate, item.date)}
        height={70}
        onPress={handlePressDate.bind(this, item.date)}
      >
        <CalendarDayText state={item.state}>{item.num}</CalendarDayText>
        <TagView>
          <Tag />
        </TagView>
      </CalendarDay>
    );
  };

  return (
    <Container>
      <CalendarDays />

      <FlatList
        data={totalDays}
        numColumns={7}
        renderItem={renderItem}
        keyExtractor={(item) =>
          `${item.date}_${item.state}_${selectedMonth}_${selectedYear}`
        }
        scrollEnabled={false}
      />
    </Container>
  );
};

export default CalendarBody;

const Container = styled.View`
  width: 100%;
`;

const CalendarDay = styled.Pressable`
  flex: 1;
  height: ${({ height }) => (height ? height : "auto")};
  align-items: center;
  padding-vertical: 10;
  padding-horizontal: 5;
  background-color: ${({ today, selected }) =>
    selected
      ? color.COLOR_CALENDAR_SELECTED
      : today
      ? color.COLOR_CALENDAR_TODAY
      : color.COLOR_WHITE_BACKGROUND};
`;

const CalendarDayText = styled.Text`
  font-weight: 600;
  color: ${({ state }) => {
    if (state === CalendarStates.sun) {
      return `${color.COLOR_RED_TEXT}`;
    } else if (state === CalendarStates.sat) {
      return `${color.COLOR_BLUE_TEXT}`;
    } else if (state === CalendarStates.prev || state === CalendarStates.next) {
      return `${color.COLOR_LIGHTGRAY_TEXT}`;
    }
  }};
`;

const TagView = styled.View`
  //   background-color: orange;
  width: 100%;
  //   height: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Tag = styled.View`
  width: 6;
  height: 6;
  border-radius: 100;
  background-color: ${color.COLOR_MAIN};
  margin-horizontal: 3;
  margin-vertical: 5;
`;

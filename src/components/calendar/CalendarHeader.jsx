import React, { useRef } from "react";
import styled from "styled-components/native";

import { FontAwesome5 } from "@expo/vector-icons";

import color from "../../common/color";

import BottomSheet from "../common/BottomSheet";

const size = 24;

const CalendarHeader = ({ selectedMonth, selectedYear, handleMoveMonth }) => {
  const ref = useRef();

  const handlePressText = () => {
    ref?.current?.open();
  };

  return (
    <Container>
      <Button onPress={handleMoveMonth.bind(this, -1)}>
        <FontAwesome5
          name="chevron-left"
          size={size}
          color={color.COLOR_MAIN}
        />
      </Button>
      <HeaderText onPress={handlePressText}>
        {selectedYear}년 {selectedMonth.toString().padStart(2, "0")}월
      </HeaderText>
      <Button onPress={handleMoveMonth.bind(this, 1)}>
        <FontAwesome5
          name="chevron-right"
          size={size}
          color={color.COLOR_MAIN}
        />
      </Button>

      <BottomSheet rbRef={ref} heightPercentage={0.3}>
        <HeaderText>hello</HeaderText>
        <HeaderText>hello</HeaderText>
        <HeaderText>hello</HeaderText>
        <HeaderText>hello</HeaderText>
        <HeaderText>hello</HeaderText>
        <HeaderText>hello</HeaderText>
        <HeaderText>hello</HeaderText>
        <HeaderText>hello</HeaderText>
        <HeaderText>hello</HeaderText>
        <HeaderText>hello</HeaderText>
        <HeaderText>hello</HeaderText>
        <HeaderText>hello</HeaderText>
      </BottomSheet>
    </Container>
  );
};

export default CalendarHeader;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  //   justify-content: center;
  justify-content: space-between;
  padding-vertical: 15;
`;

const HeaderText = styled.Text`
  color: ${color.COLOR_MAIN};
  font-size: ${size};
  font-weight: bold;
`;

const Button = styled.Pressable`
  padding-horizontal: 20;
`;

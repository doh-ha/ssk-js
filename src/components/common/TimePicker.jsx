import React, { useState } from "react";

import styled, { css } from "styled-components/native";
import color from "../../common/color";

import { Platform } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { dateToTimeFormat } from "../../utils/date";
import LeftBarContainer from "./LeftBarContainer";

const TimePicker = ({ startTime, setStartTime, endTime, setEndTime }) => {
  const [pressStartTime, setPressStartTime] = useState(false);
  const [pressEndTime, setPressEndTime] = useState(false);

  const onChange = (e, _date) => {
    if (e.type === "set") {
      if (pressStartTime) {
        setStartTime(_date);
      } else if (pressEndTime) {
        setEndTime(_date);
      }
    }
    if (Platform.OS === "android") {
      setPressStartTime(false);
      setPressEndTime(false);
    }
  };

  const handlePressTime = (isStartTime) => {
    if (isStartTime) {
      if (pressEndTime) {
        setPressEndTime(false);
      }
      setPressStartTime(!pressStartTime);
    } else {
      if (pressStartTime) {
        setPressStartTime(false);
      }
      setPressEndTime(!pressEndTime);
    }
  };

  return (
    <>
      <Container>
        <TimeWrapper>
          {/* <TimeView onPress={handlePressTime.bind(this, true)}>
            <TimeLabel>Start Time</TimeLabel>
            <Time selected={pressStartTime}>{dateToTimeFormat(startTime)}</Time>
          </TimeView> */}

          <LeftBarContainer label="Start Time" width="50%">
            <Time selected={pressStartTime}>{dateToTimeFormat(startTime)}</Time>
          </LeftBarContainer>

          <TimeView onPress={handlePressTime.bind(this, false)}>
            <TimeLabel>End Time</TimeLabel>
            <Time selected={pressEndTime}>{dateToTimeFormat(endTime)}</Time>
          </TimeView>
        </TimeWrapper>

        {(pressStartTime || pressEndTime) && (
          <DateTimePicker
            value={pressStartTime ? startTime : endTime}
            mode="time"
            display="spinner"
            onChange={onChange}
            style={{ width: "90%", alignSelf: "center" }} // IOS only
            themeVariant="light"
          />
        )}
      </Container>
    </>
  );
};

export default TimePicker;

const Container = styled.View`
  width: 100%;
`;

const TimeWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const TimeView = styled.Pressable`
  width: 50%;
  border-left-width: 4;
  border-color: ${color.COLOR_MAIN};
  padding-horizontal: 10;
`;

const TimeLabel = styled.Text`
  color: ${color.COLOR_MAIN};
  font-weight: bold;
  font-size: 14;
`;

const Time = styled.Text`
  font-size: 20;
  margin-top: 5;
  font-weight: bold;

  ${({ selected }) => {
    if (!selected) {
      return css`
        color: ${color.COLOR_GRAY_TEXT};
      `;
    }
  }}
`;

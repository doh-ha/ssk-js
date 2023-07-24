import React, { useState } from "react";

import styled, { css } from "styled-components/native";
import color from "../../common/color";

import { Platform, Pressable } from "react-native";

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
          <LeftBarContainer
            label="Start Time"
            width="50%"
            onPress={handlePressTime.bind(this, true)}
          >
            <Time selected={pressStartTime}>{dateToTimeFormat(startTime)}</Time>
          </LeftBarContainer>

          <LeftBarContainer
            label="End Time"
            width="50%"
            onPress={handlePressTime.bind(this, false)}
          >
            <Time selected={pressEndTime}>{dateToTimeFormat(endTime)}</Time>
          </LeftBarContainer>
        </TimeWrapper>

        {(pressStartTime || pressEndTime) && (
          <DateTimePicker
            value={pressStartTime ? startTime : endTime}
            mode="time"
            display="spinner"
            onChange={onChange}
            style={{ width: "90%", alignSelf: "center" }} // IOS only
            themeVariant="light"
            minuteInterval={5}
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

const Time = styled.Text`
  font-size: 20;
  font-weight: bold;

  ${({ selected }) => {
    if (!selected) {
      return css`
        color: ${color.COLOR_GRAY_TEXT};
      `;
    }
  }}
`;

import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";

import InputContainer from "./InputContainer";
import DatePicker from "../common/DatePicker";

const DatePickerForm = ({ label }) => {
  return (
    <>
      <InputContainer label={label}>
        <Container></Container>
      </InputContainer>
    </>
  );
};

export default DatePickerForm;

const Container = styled.View`
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 5;
  border-color: ${color.COLOR_MAIN};
  border-width: 1;
`;

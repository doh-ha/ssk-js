import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";
import InputContainer from "./InputContainer";

const RegularScheduleForm = () => {
  return (
    <>
      <InputContainer label={"정규 일정"}>
        <Container></Container>
      </InputContainer>
    </>
  );
};

export default RegularScheduleForm;

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: aqua;
`;

const DayButton = styled.Pressable`
  height: 100%;
`;

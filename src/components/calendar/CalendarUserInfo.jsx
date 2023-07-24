import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";

import UserInfo from "../common/UserInfo";

const CalendarUserInfo = () => {
  return (
    <>
      <Container>
        <UserInfo />
      </Container>
    </>
  );
};

export default CalendarUserInfo;

const Container = styled.View``;

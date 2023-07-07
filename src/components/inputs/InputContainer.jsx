import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";
import InputLabel from "./InputLabel";

const InputContainer = ({ children, label }) => {
  return (
    <>
      <Container>
        <InputLabel label={label} />

        <Contents>{children}</Contents>
      </Container>
    </>
  );
};

export default InputContainer;

const Container = styled.View`
  background-color: orange;
  width: 100%;
  padding-horizontal: 15;
  margin-vertical: 7;
`;

const Contents = styled.View`
  height: 45;
  width: 100%;
`;

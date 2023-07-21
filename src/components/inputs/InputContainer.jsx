import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";
import InputLabel from "./InputLabel";

const InputContainer = ({ children, label, paddingHorizontal = 15 }) => {
  return (
    <>
      <Container paddingHorizontal={paddingHorizontal}>
        {label && <InputLabel label={label} />}

        <Contents>{children}</Contents>
      </Container>
    </>
  );
};

export default InputContainer;

const Container = styled.View`
  // background-color: orange;
  width: 100%;
  padding-horizontal: ${({ paddingHorizontal }) => paddingHorizontal};
  margin-vertical: 7;
  z-index: 1;
`;

const Contents = styled.View`
  height: 40;
  width: 100%;
`;

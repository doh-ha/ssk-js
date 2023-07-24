import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";

const LeftBarContainer = ({ children, label, width = "100%" }) => {
  return (
    <>
      <Container width={width}>
        <Label>{label}</Label>
        {children}
      </Container>
    </>
  );
};

export default LeftBarContainer;

const Container = styled.View`
  width: ${({ width }) => width};
  border-left-width: 4;
  border-color: ${color.COLOR_MAIN};
  padding-horizontal: 10;
  margin-vertical: 10;
`;

const Label = styled.Text`
  color: ${color.COLOR_MAIN};
  font-weight: bold;
  font-size: 14;
`;

import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";

const InputLabel = ({ label }) => {
  return (
    <>
      <Label>{label}</Label>
    </>
  );
};

export default InputLabel;

const Label = styled.Text`
  color: ${color.COLOR_MAIN};
  font-weight: bold;
  font-size: 16;
  margin-left: 5;
  margin-bottom: 5;
`;

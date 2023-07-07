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
  font-size: 18;
  margin-left: 10;
  margin-bottom: 3;
`;

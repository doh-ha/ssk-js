import React from "react";
import styled from "styled-components/native";
import color from "../../common/color";
import InputContainer from "./InputContainer";

const TextInputForm = ({ label, value, onChangeText, placeholder }) => {
  return (
    <>
      <InputContainer label={label}>
        <InputForm value={value} onChangeText={onChangeText} placeholder={placeholder} />
      </InputContainer>
    </>
  );
};

export default TextInputForm;

const InputForm = styled.TextInput`
  width: 100%;
  height: 100%;
  background-color: ${color.COLOR_WHITE_BACKGROUND};
  border-color: ${color.COLOR_MAIN};
  border-width: 1;
  border-radius: 5;
  padding-horizontal: 15;
  font-size: 16;
`;

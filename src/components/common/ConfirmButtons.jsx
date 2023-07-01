import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";

const ConfirmButtons = ({
  confirmText,
  buttonColor,
  filled,
  onCancel,
  onConfirm,
}) => {
  return (
    <Container>
      <Button onPress={onCancel}>
        <ButtonText>취소</ButtonText>
      </Button>
      <Button onPress={onConfirm} buttonColor={buttonColor} filled={filled}>
        <ButtonText textColor={filled ? "white" : buttonColor}>
          {confirmText}
        </ButtonText>
      </Button>
    </Container>
  );
};

export default ConfirmButtons;

const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20;
  padding-horizontal: 10;
`;

const Button = styled.Pressable`
  width: 48%;
  height: 40;
  align-items: center;
  justify-content: center;
  background-color: ${({ buttonColor, filled }) =>
    buttonColor && filled ? buttonColor : color.COLOR_WHITE_BACKGROUND};
  border-radius: 5;
  border-width: 2;
  border-color: ${({ buttonColor }) =>
    buttonColor ? buttonColor : color.COLOR_GRAY_BUTTON};
`;

const ButtonText = styled.Text`
  color: ${({ textColor }) =>
    textColor ? textColor : color.COLOR_GRAY_BUTTON};
  font-weight: bold;
  font-size: 18;
`;

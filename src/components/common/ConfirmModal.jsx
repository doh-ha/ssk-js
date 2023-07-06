import React from "react";
import styled from "styled-components/native";

import color from "../../common/color";

const ConfirmModal = ({
  modalText, 
  confirmText,
  cancelText,
  onCancel,
  onConfirm,
  newValue,
  setNewValue,
}) => {

  const handleConfirmButton = () => {
    onConfirm();
    setTimeout(() => {
      onCancel();
    }, 1500);
  }

  return (
    <Wrapper>
      <ModalContainer>
        <ModalText>
          {modalText}
        </ModalText>
        {setNewValue &&         
          <InputContainer>
            <Input
              value={newValue}
              onChangeText={setNewValue}
            />
          </InputContainer>
        }
        <ButtonContainer>
          <Button type="cancel" onPress={onCancel}>
            <ButtonText type="cancel">
              {cancelText}
            </ButtonText>
          </Button>
          <Button type="confirm" onPress={handleConfirmButton}>
            <ButtonText type="confirm">
              {confirmText}
            </ButtonText>
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </Wrapper>
  );
};

export default ConfirmModal;

// styled
const Wrapper = styled.View`
  position: fixed;
  top: 0;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  width: 80%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 12px;
  gap: 15px;
`;

const ModalText = styled.Text`
  color: ${color.COLOR_GRAY_TITLE};
  font-size: 18px;
  font-family: "Medium";
`;

const InputContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: ${color.COLOR_GRAY_BORDER};
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 15px 6px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  padding: 6px 12px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.type === "confirm" ? color.COLOR_MAIN : color.COLOR_GRAY_BORDER };
  background-color: ${(props) => props.type === "confirm" ? color.COLOR_MAIN : "#fff" };
`;

const ButtonText = styled.Text`
  color: ${(props) => props.type === "confirm" ? "#fff" : color.COLOR_GRAY_TEXT };
  font-size: 18px;
  font-family: "ExtraBold";
  line-height: 22px;
`;


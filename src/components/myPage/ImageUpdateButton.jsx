import React from "react";
import styled from "styled-components/native";

import color from "../../common/color";

const ImageUpdateButton = ({ updateImage }) => {

  const handleButton = () => {
    updateImage;
  };

  return (
    <Button onPress={handleButton}>
      <ButtonText>
        프로필 사진 수정
      </ButtonText>
    </Button>
  );
};

export default ImageUpdateButton;

// styled
const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 14px;
  border: 1px solid ${color.COLOR_MAIN};
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: ${color.COLOR_MAIN};
  font-size: 14px;
  font-family: "Regular";
`;
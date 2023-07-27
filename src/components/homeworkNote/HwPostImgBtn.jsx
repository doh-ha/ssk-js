import React from "react";
import styled from "styled-components/native";

import color from "../../common/color";
import { pickImage } from "../../constants/imagePicker";
import { Ionicons } from "@expo/vector-icons";
import SubLayout from "../common/SubLayout";

const HwImgPostBtn = ({ setImage }) => {
  const handleButton = () => {
    pickImage({ setImage });
  };

  return (
    <SubLayout>
      <Button onPress={handleButton}>
        <Ionicons name="image-outline" size={20} color="#B0B0B0" />
      </Button>
    </SubLayout>
  );
};

export default HwImgPostBtn;

// styled
const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 14px;
  border: 1px solid ${color.COLOR_MAIN};
  border-radius: 5px;
  width: 100;
  height: 100;
`;

const ButtonText = styled.Text`
  color: ${color.COLOR_MAIN};
  font-size: 14px;
  font-family: "Regular";
`;
const Container = styled.View`
  border-radius: 8px;
  border: 1px solid ${color.COLOR_MAIN};
  background: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
  alignitems: center;
  height: 100;
  padding-horizontal: 20;
  margin-vertical: 10;
  margin-horizontal: 15;
`;

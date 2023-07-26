import React, { useState } from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import color from "../../common/color";
import { Ionicons } from "@expo/vector-icons";
import img from "../../assets/images/tuteeImage.png";

const HwFeedItem = () => {
  const [isPressed, setPress] = useState("false");

  return (
    <>
      <TopWrapper>
        <BoldText>1월 12일</BoldText>
        <IconWrapper>
          <Ionicons name="ellipse-outline" size={20} color={isPressed == "false" ? "#B0B0B0" : "#3FC02A"} margin={3} onPress={() => setPress(!isPressed)} />
          <Ionicons name="triangle-outline" size={20} color={isPressed == "false" ? "#B0B0B0" : "#FAB123"} margin={3} onPress={() => setPress("!isPressed")} />
          <Ionicons name="close-outline" size={25} color={isPressed == "false" ? "#B0B0B0" : "#F33333"} onPress={() => setPress("!isPressed")} />
        </IconWrapper>
      </TopWrapper>
      <Image source={img} />
    </>
  );
};
export default HwFeedItem;

const ContentText = styled.Text`
  font-size: 15;
  font-weight: bold;
`;

const TopWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 20;
  margin-horizontal: 20;
`;

const BoldText = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: ${color.COLOR_MAIN};
`;

const IconWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

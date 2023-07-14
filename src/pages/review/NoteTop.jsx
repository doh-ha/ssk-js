import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import color from "../../common/color";

const NoteTop = () => {
  return (
    <TopWrapper>
      <Ionicons name="create-outline" size={32} color="#0000" />
      <BoldText>복습 목록</BoldText>
      <Ionicons name="trash-outline" size={32} color="#B0B0B0" />
    </TopWrapper>
  );
};

export default NoteTop;

const TopWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 20;
`;
const BoldText = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: ${color.COLOR_MAIN};
`;

import React from "react";
import MainLayout from "../../components/common/MainLayout";
import styled from "styled-components/native";
import { Text } from "react-native";
import ProgressBar from "../../components/homeworkNote/ProgressBar";
import color from "../../common/color";
import { Ionicons } from "@expo/vector-icons";

const HwListPage = () => {
  return (
    <>
      <MainLayout headerText={"숙제 노트"} headerType={"back"}>
        <TopWrapper>
          <Ionicons name="create-outline" size={32} color="#B0B0B0" />
          <BoldText>숙제 목록</BoldText>
          <Ionicons name="add-circle-outline" size={32} color="#B0B0B0" />
        </TopWrapper>
        <ProgressBar />
      </MainLayout>
    </>
  );
};

const TopWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 20;
  margin-horizontal: 20;
`;

const BoldText = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: ${color.COLOR_MAIN};
`;

export default HwListPage;

const Container = styled.FlatList``;

const Button = styled.TouchableOpacity``;

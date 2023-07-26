import React from "react";
import MainLayout from "../../components/common/MainLayout";
import styled from "styled-components/native";
import ProgressBar from "../../components/homeworkNote/ProgressBar";
import color from "../../common/color";
import { Ionicons } from "@expo/vector-icons";
import SubLayout from "../../components/common/SubLayout";
import { useNavigation } from "@react-navigation/native";
import HwFeedItem from "./HwFeedItem";
const HwFeedPage = () => {
  return (
    <>
      <MainLayout headerText={"숙제 노트"} headerType={"back"}>
        <TopWrapper>
          <Ionicons name="create-outline" size={32} color="#B0B0B0" />
          <BoldText>인증 피드</BoldText>
          <Ionicons name="add-circle-outline" size={32} color="#B0B0B0" />
        </TopWrapper>
        <HwFeedItem />
      </MainLayout>
    </>
  );
};
export default HwFeedPage;

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
  font-size: 24;
  font-weight: bold;
  color: ${color.COLOR_MAIN};
`;

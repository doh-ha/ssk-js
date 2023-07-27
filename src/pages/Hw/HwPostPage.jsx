import React from "react";
import MainLayout from "../../components/common/MainLayout";
import styled from "styled-components/native";
import color from "../../common/color";
import { Ionicons } from "@expo/vector-icons";
import HwImgPostBtn from "../../components/homeworkNote/HwPostImgBtn";
import SubLayout from "../../components/common/SubLayout";

const HwPostPage = () => {
  return (
    <>
      <MainLayout headerText={"숙제 노트"} headerType={"back"}>
        <TopWrapper>
          <BoldText>숙제 작성</BoldText>
        </TopWrapper>
        <SubLayout>
          <ContentText>제출할 숙제</ContentText>
          <ContentText>숙제 사진</ContentText>
          <HwImgPostBtn />
        </SubLayout>
      </MainLayout>
    </>
  );
};
export default HwPostPage;

const ContentText = styled.Text`
  font-size: 15;
  font-weight: bold;
  color: ${color.COLOR_MAIN};
`;

const TopWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-vertical: 20;
  margin-horizontal: 20;
`;

const BoldText = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: ${color.COLOR_MAIN};
`;

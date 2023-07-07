import React from "react";
import styled from "styled-components/native";
import MainLayout from "../../components/common/MainLayout";
import ContinuingReview from "../../components/reviewNote/ContinuingReview";
import color from "../../common/color";
import { Ionicons } from "@expo/vector-icons";
const ReviewListPage = () => {
  return (
    <MainLayout headerText={"복습 노트"} headerType={"back"}>
      <InnerWrapper>
        <TopWrapper>
          <Ionicons name="create-outline" size={32} color="#B0B0B0" />
          <BoldText>복습 목록</BoldText>
          <Ionicons name="add-circle-outline" size={32} color="#0000" />
        </TopWrapper>

        <ContinuingReview />
      </InnerWrapper>
    </MainLayout>
  );
};

export default ReviewListPage;

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

const InnerWrapper = styled.View`
  margin-horizontal: 20;
`;

import React, { useState } from "react";
import styled from "styled-components/native";
import MainLayout from "../../components/common/MainLayout";
import ContinuingReview from "../../components/reviewNote/ContinuingReview";
import color from "../../common/color";
import { Ionicons } from "@expo/vector-icons";
import FinishedReview from "../../components/reviewNote/FinishedReview";
import KeyboardAvoidingLayout from "../../components/common/KeyboardAvoidingLayout";
import TextInputForm from "../../components/inputs/TextInputForm";
const ReviewListPage = () => {
  const initialState = {
    id: 0,
    title: "",
    discription: "",
    completed: false,
  };
  const [newTodo, setNewTodo] = useState(initialState);
  const [todo, setTodo] = useState([]);
  return (
    <KeyboardAvoidingLayout>
      <MainLayout headerText={"복습 노트"} headerType={"back"}>
        <InnerWrapper>
          <TopWrapper>
            <Ionicons name="create-outline" size={32} color="#0000" />
            <BoldText>복습 목록</BoldText>
            <Ionicons name="trash-outline" size={32} color="#B0B0B0" />
          </TopWrapper>

          <ContinuingReview />
          <FinishedReview />
        </InnerWrapper>
        <TextInputForm placeholder={"복습 내용을 입력하세요."} />
      </MainLayout>
    </KeyboardAvoidingLayout>
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

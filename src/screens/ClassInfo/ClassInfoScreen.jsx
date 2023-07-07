import React from "react";

import MainLayout from "../../components/common/MainLayout";
import styled from "styled-components/native";
import Calendar from "../../components/calendar/Calendar";
import HwNoteBox from "../../components/homeworkNote/HwNoteBox";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native";

const ClassInfoScreen = () => {
  const navigation = useNavigation();

  const handlePressHwBtn = () => {
    navigation.navigate("HwListPage");
  };
  const handlePressReviewBtn = () => {
    navigation.navigate("ReviewListPage");
  };
  return (
    <MainLayout headerText={"수업 정보"} headerType={"back"}>
      <Calendar />
      <Wrapper>
        <TouchableArea onPress={handlePressHwBtn}>
          <HwNoteBox />
        </TouchableArea>
        <TouchableArea onPress={handlePressReviewBtn}>
          <HwNoteBox />
        </TouchableArea>
      </Wrapper>
    </MainLayout>
  );
};

export default ClassInfoScreen;

const TouchableArea = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  activeopacity: 0.8;
`;

const Wrapper = styled.View`
  margin-vertical: 15;
  padding-horizontal: 20;
`;

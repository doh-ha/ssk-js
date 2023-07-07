import React from "react";

import MainLayout from "../../components/common/MainLayout";
import styled from "styled-components/native";
import Calendar from "../../components/calendar/Calendar";
import HwNoteBox from "../../components/homeworkNote/HwNoteBox";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ClassInfoScreen = () => {
  const navigation = useNavigation();

  const handlePressHwBtn = () => {
    navigation.navigate("HwListPage");
  };

  return (
    <>
      <ScrollView>
        <MainLayout headerText={"수업 정보"} headerType={"basic"}>
          <Calendar />
          <HwNoteBox />
          <TouchableArea onPress={handlePressHwBtn}>
            <HwNoteBox />
          </TouchableArea>
        </MainLayout>
      </ScrollView>
    </>
  );
};

export default ClassInfoScreen;

const TouchableArea = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  activeopacity: 0.8;
  border-color: ${color.COLOR_MAIN};
`;

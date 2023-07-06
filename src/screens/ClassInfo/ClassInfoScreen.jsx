import React from "react";

import MainLayout from "../../components/common/MainLayout";
import styled from "styled-components/native";
import Calendar from "../../components/calendar/Calendar";
import HwNoteBox from "../../components/homeworkNote/HwNoteBox";
import { FlatList, ScrollView } from "react-native";
import { Container } from "postcss";

const ClassInfoScreen = () => {
  return (
    <>
      <ScrollView>
        <MainLayout headerText={"수업 정보"} headerType={"basic"}>
          <Calendar />
          <HwNoteBox />
          <HwNoteBox />
        </MainLayout>
      </ScrollView>
    </>
  );
};

export default ClassInfoScreen;

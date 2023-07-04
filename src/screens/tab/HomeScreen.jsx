import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";

import MainLayout from "../../components/common/MainLayout";
import Calendar from "../../components/calendar/Calendar";
import ClassList from "../../components/common/ClassList";
import CircleIconButton from "../../components/common/CircleIconButton";

const HomeScreen = () => {
  return (
    <>
      <MainLayout headerText={"홈"} headerType={"basic"}>
        <Calendar />

        <TodayClassView>
          <TodayClassText>오늘 수업</TodayClassText>

          <ClassList />
        </TodayClassView>
      </MainLayout>

      <CircleIconButton name="plus" />
    </>
  );
};

export default HomeScreen;

const TodayClassView = styled.View`
  // background-color: orange;
  margin-vertical: 15;
  padding-horizontal: 10;
`;
const TodayClassText = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: ${color.COLOR_MAIN};
  padding-horizontal: 10;
  padding-vertical: 5;
`;

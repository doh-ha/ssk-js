import React from "react";

import MainLayout from "../../components/common/MainLayout";
import styled from "styled-components/native";
import Calendar from "../../components/calendar/Calendar";

const ClassInfoScreen = () => {
  return (
    <>
      <MainLayout headerText={"수업 정보"} headerType={"basic"}>
        <Calendar />
      </MainLayout>
    </>
  );
};

export default ClassInfoScreen;
const Container = styled.FlatList``;

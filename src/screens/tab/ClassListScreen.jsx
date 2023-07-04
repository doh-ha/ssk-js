import React from "react";
import MainLayout from "../../components/common/MainLayout";
import { Text } from "react-native";

const ClassListScreen = () => {
  return (
    <>
      <MainLayout headerText={"선생님 목록"} headerType={"basic"}>
        <Text>선생님목록</Text>
      </MainLayout>
    </>
  );
};

export default ClassListScreen;

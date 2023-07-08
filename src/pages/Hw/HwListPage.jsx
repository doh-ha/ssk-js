import React from "react";
import MainLayout from "../../components/common/MainLayout";
import styled from "styled-components/native";
import { Text } from "react-native";
import ProgressBar from "../../components/homeworkNote/ProgressBar";

const HwListPage = () => {
  return (
    <>
      <MainLayout headerText={"숙제 노트"} headerType={"back"}></MainLayout>
      <Text>숙제노트페이지입니다</Text>
      <ProgressBar />
    </>
  );
};

export default HwListPage;

const Container = styled.FlatList``;

const Button = styled.TouchableOpacity``;

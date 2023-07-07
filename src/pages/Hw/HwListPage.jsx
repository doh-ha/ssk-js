import React from "react";
import MainLayout from "../../components/common/MainLayout";
import styled from "styled-components/native";
import { Text } from "react-native";

const HwListPage = () => {
  return (
    <>
      <MainLayout headerText={"숙제 노트"} headerType={"back"}></MainLayout>
      <Text>숙제노트페이지입니다</Text>
    </>
  );
};

export default HwListPage;

const Container = styled.FlatList``;

const Button = styled.TouchableOpacity``;

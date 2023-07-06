import React from "react";
import MainLayout from "../../components/common/MainLayout";
import styled from "styled-components/native";
import ClassItem from "../../components/common/ClassItem";
import CircleIconButton from "../../components/common/CircleIconButton";
import { Text } from "react-native";
const ClassListScreen = () => {
  return (
    <>
      <MainLayout headerText={"수업 목록"} headerType={"basic"}>
        <Container data={[0, 1]} renderItem={ClassItem} />
        <CircleIconButton name="plus" />
      </MainLayout>
    </>
  );
};

export default ClassListScreen;
const Container = styled.FlatList`
  width: 100%;
  overflow: auto;
`;

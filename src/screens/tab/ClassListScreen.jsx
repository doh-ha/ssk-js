import React from "react";
import MainLayout from "../../components/common/MainLayout";
import styled from "styled-components/native";
import ClassItem from "../../components/common/ClassItem";
import CircleIconButton from "../../components/common/CircleIconButton";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

const ClassListScreen = () => {
  const navigation = useNavigation();

  const handleClassComponentButton = () => {
    navigation.navigate("ClassInfoScreen");
  };
  return (
    <>
      <MainLayout headerText={"수업 목록"} headerType={"basic"}>
        <TouchableOpacity onPress={() => navigation.navigate("ClassInfoScreen")}>
          <ClassItem />
        </TouchableOpacity>
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

const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

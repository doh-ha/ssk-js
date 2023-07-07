import React from "react";
import MainLayout from "../../components/common/MainLayout";
import styled from "styled-components/native";
import ClassItem from "../../components/common/ClassItem";
import CircleIconButton from "../../components/common/CircleIconButton";
import { useNavigation } from "@react-navigation/native";

const ClassListScreen = () => {
  const navigation = useNavigation();

  const handleClassComponentBtn = () => {
    navigation.navigate("ClassInfoScreen");
  };
  return (
    <>
      <MainLayout headerText={"수업 목록"} headerType={"basic"}>
        <TouchableArea onPress={handleClassComponentBtn}>
          <ClassItem />
        </TouchableArea>
        <CircleIconButton name="plus" />
      </MainLayout>
    </>
  );
};

export default ClassListScreen;

const Container = styled.FlatList`
  width: 100%;
  overflow: visible;
`;

const TouchableArea = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  activeopacity: 0.8;
`;

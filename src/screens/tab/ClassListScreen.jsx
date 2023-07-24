import React, { useEffect } from "react";
import MainLayout from "../../components/common/MainLayout";
import styled from "styled-components/native";
import ClassItem from "../../components/common/ClassItem";
import CircleIconButton from "../../components/common/CircleIconButton";
import { useNavigation } from "@react-navigation/native";
import StudentItem from "../../components/common/StudentItem";
import ClassList from "../../components/common/ClassList";
import client from "../../config/axios";

const ClassListScreen = () => {
  const navigation = useNavigation();

  const handleClassComponentBtn = () => {
    navigation.navigate("ClassInfoScreen");
  };

  const getClassList = async () => {
    try {
      const ret = await client.get("/api/tutoring/list");
      console.log(ret.status);
      console.log(ret.data);
    } catch (err) {
      console.log("get class list error: ", err);
    }
  };

  // useEffect(() => {
  //   getClassList();
  // }, []);

  return (
    <>
      <MainLayout headerText={"수업 목록"} headerType={"basic"}>
        {/* <TouchableArea onPress={handleClassComponentBtn}>
          <StudentItem />
        </TouchableArea> */}

        <ClassList />

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

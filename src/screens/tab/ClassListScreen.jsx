import React from "react";
import MainLayout from "../../components/common/MainLayout";
import ProfileImage from "../../components/common/ProfileImage";
import styled from "styled-components/native";
import ClassContainer from "../../components/classList/ClassContainer";
import ClassItem from "../../components/common/ClassItem";

const ClassListScreen = () => {
  return (
    <>
      <MainLayout headerText={"수업 목록"} headerType={"basic"}>
        <Container data={[0, 1]} renderItem={ClassItem} />
      </MainLayout>
    </>
  );
};

export default ClassListScreen;
const Container = styled.FlatList`
  width: 100%;
  overflow: auto;
`;

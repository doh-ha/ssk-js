import React from "react";
import styled from "styled-components/native";
import color from "../../common/color";

import ClassItem from "./ClassItem";
import { View } from "react-native";

const ClassList = () => {
  return (
    <>
      <Container
        data={[0, 1]}
        renderItem={({ item }) => <ClassItem {...item} />}
      />
    </>
  );
};

export default ClassList;

const Container = styled.FlatList`
  width: 100%;
  overflow: visible;
`;

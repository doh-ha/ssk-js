import React from "react";
import styled from "styled-components/native";
import color from "../../common/color";

import ClassItem from "./ClassItem";

const ClassList = () => {
  return (
    <>
      <Container data={[0, 1]} renderItem={ClassItem} />
    </>
  );
};

export default ClassList;

const Container = styled.FlatList`
  width: 100%;
  overflow: auto;
`;

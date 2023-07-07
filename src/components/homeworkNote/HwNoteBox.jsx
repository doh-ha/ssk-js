import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";

const HwNoteBox = () => {
  return (
    <>
      <Container>
        <Text>숙제 노트</Text>
      </Container>
    </>
  );
};

export default HwNoteBox;

const Text = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: ${color.COLOR_MAIN};
  padding-horizontal: 10;
  padding-vertical: 5;
  display: flex;
  justify-content: center;
`;

const Container = styled.View`
  border-radius: 8px;
  border: 1px solid ${color.COLOR_MAIN};
  background: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

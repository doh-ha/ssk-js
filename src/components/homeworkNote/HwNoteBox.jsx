import React from "react";
import styled from "styled-components/native";
import color from "../../common/color";

const HwNoteBox = () => {
  return (
    <>
      <Container>
        <TextView>
          <Text>숙제 노트</Text>
          <GreyText>더보기 </GreyText>
        </TextView>
      </Container>
    </>
  );
};

export default HwNoteBox;

const TextView = styled.View`
  margin-left: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: ${color.COLOR_MAIN};
  // padding-horizontal: 10;
  // padding-vertical: 5;
  // display: flex;
  // flex: 1;
  // alignitems: center;
  width: 80%;
`;

const GreyText = styled.Text`
  font-size: 15;
  font-weight: bold;
  color: ${color.COLOR_GRAY_TEXT};
`;

const Container = styled.View`
  border-radius: 8px;
  border: 1px solid ${color.COLOR_MAIN};
  background: #fff;
  flex-direction: row;
  flex: 1;
  alignitems: center;
  width: 50%;
  height: 100%;
  padding-horizontal: 10;
  padding-vertical: 5;
  //background-color: red;
`;

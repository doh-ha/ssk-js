import React, { useState } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ReviewItem = ({ contentText, tagColor, checked }) => {
  const [value, setValue] = useState(0);
  const changeValue = () => {
    if (value == true) {
      setValue(false);
    } else {
      setValue(true);
    }
  };
  return (
    <Container>
      <RightWrapper>
        <Ionicons name="ellipse" size={10} color={tagColor} />

        <ContentText> {contentText}</ContentText>
      </RightWrapper>
      <Ionicons name={value == true ? "checkmark-circle" : "checkmark-circle-outline"} size={30} onPress={changeValue} />
    </Container>
  );
};

export default ReviewItem;

const Container = styled.View`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #d6d6d6;
  padding-horizontal: 5;
  padding-vertical: 5;
`;

const Button = styled.TouchableOpacity``;

const ContentText = styled.Text`
  font-size: 15;
  font-family: "Regular";
  display: flex;
  padding-horizontal: 5;
  //background-color: red;
`;

const RightWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

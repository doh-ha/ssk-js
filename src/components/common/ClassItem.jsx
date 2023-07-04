import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";

import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import ProfileImage from "./ProfileImage";

const ClassItem = () => {
  return (
    <Container style={styles.container}>
      <UserInfoView>
        <ProfileImage />

        <UserTextView>
          <UserBigText>영어</UserBigText>
          <UserSmallText>박영어 선생님</UserSmallText>
        </UserTextView>
      </UserInfoView>

      <FontAwesome5 name="chevron-right" size={20} color={color.COLOR_MAIN} />
    </Container>
  );
};

export default ClassItem;

const styles = StyleSheet.create({
  container: {
    shadowColor: color.COLOR_BOX_SHADOW,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
});

const Container = styled.Pressable`
  background-color: ${color.COLOR_WHITE_BACKGROUND};
  width: 100%;
  margin-vertical: 4;
  border-radius: 5;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 18;
  padding-vertical: 10;
`;

const UserInfoView = styled.View`
  height: 40;
  flex-direction: row;
  align-items: center;
`;

const UserTextView = styled.View`
  margin-horizontal: 15;
`;

const UserBigText = styled.Text`
  font-weight: bold;
  font-size: 18;
`;

const UserSmallText = styled.Text`
  color: ${color.COLOR_GRAY_TEXT};
  margin-top: 3;
`;

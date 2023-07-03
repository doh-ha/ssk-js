import React from "react";
import styled from "styled-components/native";
import color from "../../common/color";

import { Pressable, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import ProfileImage from "../common/ProfileImage";

const ScheduleItem = ({ tagColor = color.COLOR_MAIN }) => {
  return (
    <Pressable style={styles.container}>
      <FontAwesome5 name="check" color={tagColor} size={20} />

      <TimeContainer>
        <StartTime>18:00</StartTime>
        <EndTime>~ 20:30</EndTime>
      </TimeContainer>

      <VerticalLine tagColor={tagColor} />

      <UserInfoView>
        <ProfileImage />

        <TextView>
          <InfoBigText>영어</InfoBigText>
          <InfoSmallText>김영어 선생님</InfoSmallText>
        </TextView>
      </UserInfoView>
    </Pressable>
  );
};

export default ScheduleItem;

const styles = StyleSheet.create({
  container: {
    shadowColor: color.COLOR_BOX_SHADOW,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    backgroundColor: color.COLOR_WHITE_BACKGROUND,
    width: "100%",
    height: 55,
    borderRadius: 5,
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
});

const TimeContainer = styled.View`
  margin-horizontal: 15;
`;

const StartTime = styled.Text`
  font-weight: bold;
  font-size: 16;
`;

const EndTime = styled.Text`
  font-weight: 500;
  color: ${color.COLOR_GRAY_TEXT};
`;

const VerticalLine = styled.View`
  height: 100%;
  width: 5;
  border-radius: 100;
  background-color: ${({ tagColor }) => tagColor};
`;

const UserInfoView = styled.View`
  //   background-color: orange;
  flex-direction: row;
  align-items: center;
  margin-horizontal: 15;
`;

const TextView = styled.View`
  margin-left: 10;
`;

const InfoBigText = styled.Text`
  font-weight: bold;
  font-size: 16;
  margin-bottom: 3;
`;

const InfoSmallText = styled.Text`
  font-weight: 500;
  color: ${color.COLOR_GRAY_TEXT};
  font-size: 12;
`;

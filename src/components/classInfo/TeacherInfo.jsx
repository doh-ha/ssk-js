import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";

import ProfileImage from "../common/ProfileImage";

const TeacherInfo = () => {
  return (
    <UserInfoView>
      <ProfileImage />
      <UserTextView>
        <BigText>국어</BigText>
        <SmallText>김국어 선생님</SmallText>
      </UserTextView>
    </UserInfoView>
  );
};

export default TeacherInfo;

const UserInfoView = styled.View`
  height: 40;
  flex-direction: row;
  align-items: center;
`;

const UserTextView = styled.View`
  margin-horizontal: 15;
`;

const BigText = styled.Text`
  font-weight: bold;
  font-size: 18;
`;

const SmallText = styled.Text`
  color: ${color.COLOR_GRAY_TEXT};
  margin-top: 3;
`;

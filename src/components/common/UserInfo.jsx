import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";

import ProfileImage from "./ProfileImage";

const UserInfo = ({
  profileImageUrl,
  subject = "과목",
  name = "학생/선생 이름",
}) => {
  return (
    <>
      <UserInfoView>
        <ProfileImage image={profileImageUrl} />

        <TextView>
          <InfoBigText>{subject}</InfoBigText>
          <InfoSmallText>{name}</InfoSmallText>
        </TextView>
      </UserInfoView>
    </>
  );
};

export default UserInfo;

const UserInfoView = styled.View`
  //   background-color: orange;
  flex-direction: row;
  align-items: center;
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

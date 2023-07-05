import React from "react";
import styled from "styled-components/native";

import color from "../../common/color";

import WhiteLayout from "../../components/common/WhiteLayout";
import ProfileImage from "../../components/common/ProfileImage";
import ProfileInfo from "../../components/myPage/ProfileInfo";
import ImageUpdateButton from "../../components/myPage/ImageUpdateButton";

const MyProfileScreen = () => {
  return (
    <WhiteLayout headerText={"내 정보"} headerType={"back"}>
      <ProfileImageWrapper>
        <ProfileImage size={120} />
        <ImageUpdateButton />
        <DefaultImageButton>
          <DefaultImageText>기본 이미지로 변경</DefaultImageText>
        </DefaultImageButton>
      </ProfileImageWrapper>
      <ContentWrapper>
        <ProfileInfo headerText="이름" contentText="김철수"/>
        <ProfileInfo headerText="Tutor/Tutee" contentText="학생"/>
        <ProfileInfo headerText="이메일" contentText="cheolsu@naver.com"/>
      </ContentWrapper>
    </WhiteLayout>
  );
};

export default MyProfileScreen;

// styled
const ProfileImageWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 7px;
`;

const ContentWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const DefaultImageButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DefaultImageText = styled.Text`
  color: ${color.COLOR_GRAY_BUTTON};
  font-size: 12px;
  font-family: "Regular";
`;
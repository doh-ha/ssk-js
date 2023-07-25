import React from "react";
import styled from "styled-components/native";

import { FontAwesome5 } from "@expo/vector-icons";

import color from "../../common/color";
import ProfileImage from "../common/ProfileImage";

const MyPageButton = ({ nickname, type, handleButton }) => {
  let component;
  switch (type) {
    case "PROFILE":
      component = (
        <>
          <ProfileContainer>
            <ProfileImage />
            <NameText>{nickname}</NameText>
          </ProfileContainer>
          <FontAwesome5 name="angle-right" size={20} color="#D4D4D4" />
        </>
      );
      break;
    case "NOTIFICATION":
      component = (
        <>
          <ButtonText>푸시 알림</ButtonText>
          <FontAwesome5 name="angle-right" size={20} color="#D4D4D4" />
        </>
      );
      break;
    case "AGREEMENT":
      component = (
        <>
          <ButtonText>이용 약관</ButtonText>
          <FontAwesome5 name="angle-right" size={20} color="#D4D4D4" />
        </>
      );
      break;
    case "LOGOUT":
      component = (
        <>
          <ButtonText>로그아웃</ButtonText>
        </>
      );
      break;
    case "LEAVE":
      component = (
        <>
          <ButtonText style={{ color: "#EB4040" }}>회원탈퇴</ButtonText>
        </>
      );
      break;
    case "LOGIN": // 임시
      component = (
        <>
          <ButtonText>로그인(임시)</ButtonText>
        </>
      );
    default:
      break;
  }

  return (
    <ButtonContainer styled={{ activeOpacity: 0.8 }} onPress={handleButton}>
      {component}
    </ButtonContainer>
  );
};

export default MyPageButton;

// styled
const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 22px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: ${color.COLOR_GRAY_LINE};
`;

const ButtonText = styled.Text`
  color: ${color.COLOR_GRAY_TITLE};
  font-size: 18px;
  font-family: "Regular";
  line-height: 22px;
`;

const ProfileContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const NameText = styled.Text`
  color: #000;
  font-size: 18px;
  font-family: "Medium";
  line-height: 22px;
`;

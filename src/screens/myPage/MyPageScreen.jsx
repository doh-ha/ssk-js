import React from "react";
import { useNavigation } from "@react-navigation/native";

import MainLayout from "../../components/common/MainLayout";
import MyPageButton from "../../components/myPage/MyPageButton";

const MyPageScreen = () => {
  const navigation = useNavigation();

  // 버튼: 프로필 정보 화면으로 가기
  const handleProfileButton = () => {
    navigation.navigate("MyProfileScreen");
  };

  // 버튼: 푸시 알림 설정 화면으로 가기
  const handleNotificationButton = () => {
    navigation.navigate("MyPageNotificationScreen");
  };


  return (
    <MainLayout headerText={"마이 페이지"} headerType={"basic"}>
      <MyPageButton type="PROFILE" nickname="김철수" handleButton={handleProfileButton}/>
      <MyPageButton type="NOTIFICATION" handleButton={handleNotificationButton}/>
      <MyPageButton type="AGREEMENT"/>
      <MyPageButton type="LOGOUT"/>
      <MyPageButton type="LEAVE"/>
    </MainLayout>
  );
};

export default MyPageScreen;
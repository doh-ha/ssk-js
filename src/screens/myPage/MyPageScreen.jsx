import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { clearData, getData } from "../../constants/asyncStorage";

import { Alert } from "react-native";

import MainLayout from "../../components/common/MainLayout";
import MyPageButton from "../../components/myPage/MyPageButton";
import ConfirmModal from "../../components/common/ConfirmModal";
import useUser from "../../hooks/useUser";

const MyPageScreen = () => {
  const user = useUser();

  const navigation = useNavigation();
  // const [nickName, setNickName] = useState("");
  const [isLeaveModalOpened, setIsLeaveModalOpened] = useState(false);

  // 버튼: 프로필 정보 화면으로 가기
  const handleProfileButton = () => {
    navigation.navigate("MyProfileScreen");
  };

  // 버튼: 푸시 알림 설정 화면으로 가기
  const handleNotificationButton = () => {
    navigation.navigate("MyPageNotificationScreen");
  };

  // 회원 탈퇴
  const withdrawUser = async () => {
    try {
      const token = await getData("accessToken");
      const response = await axios.delete(
        "http://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com/api/user/withdraw",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // 로그아웃
  const handleLogout = () => {
    Alert.alert("로그아웃", "로그아웃 하시겠습니까?", [
      {
        text: "취소",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "확인",
        onPress: async () => {
          await clearData();
          navigation.navigate("LoginScreen");
        },
      },
    ]);
  };

  // 회원 정보 불러오기
  const fetchUserInfo = async () => {
    try {
      const token = await getData("accessToken");
      const response = await axios.get(
        "http://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com/api/user/detail",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const userInfo = await fetchUserInfo();
  //     console.log(userInfo);
  //     setNickName(userInfo.name);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <MainLayout headerText={"마이 페이지"} headerType={"basic"}>
        <MyPageButton
          type="PROFILE"
          nickname={user?.name}
          handleButton={handleProfileButton}
        />
        <MyPageButton
          type="NOTIFICATION"
          handleButton={handleNotificationButton}
        />
        <MyPageButton type="AGREEMENT" />
        <MyPageButton type="LOGOUT" handleButton={handleLogout} />
        <MyPageButton
          type="LEAVE"
          handleButton={() => setIsLeaveModalOpened(true)}
        />
        {/* 임시 */}
        <MyPageButton
          type="LOGIN"
          handleButton={() => navigation.navigate("LoginScreen")}
        />
      </MainLayout>
      {isLeaveModalOpened && (
        <ConfirmModal
          modalText="정말로 회원 탈퇴하시겠습니까?"
          confirmText="탈퇴하기"
          cancelText="취소하기"
          onCancel={() => setIsLeaveModalOpened(false)}
          onConfirm={withdrawUser}
        />
      )}
    </>
  );
};

export default MyPageScreen;

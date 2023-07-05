import React from "react";

import MainLayout from "../../components/common/MainLayout";
import MyPageButton from "../../components/myPage/MyPageButton";

const MyPageScreen = () => {

  return (
    <MainLayout headerText={"마이 페이지"} headerType={"basic"}>
      <MyPageButton type="PROFILE" nickname="김철수"/>
      <MyPageButton type="NOTIFICATION"/>
      <MyPageButton type="AGREEMENT"/>
      <MyPageButton type="LOGOUT"/>
      <MyPageButton type="LEAVE"/>
    </MainLayout>
  );
};

export default MyPageScreen;
import React from "react";
import styled from "styled-components/native";
import Toast from "react-native-toast-message";

import Layout from "../../components/common/Layout";
import PageWrapper from "../../components/common/PageWrapper";
import Margin from "../../components/common/Margin";
import LoginLogo from "../../components/login/LoginLogo";
import LoginForm from "../../components/login/LoginForm";
import LoginOptions from "../../components/login/LoginOptions";

const LoginScreen = () => {
  const successMessage = () => Toast.show({type: "success", text1: "성공적으로 로그인했습니다!"});
  const errorMessage = () => Toast.show({type: "error", text1: "아이디나 비밀번호를 확인해주세요!"});

  return (
    <>
      <Layout>
        <PageWrapper>
          <Toast
            position="top"
            topOffset={20}
            visibilityTime={1200}
          />
          <Margin size={130}/>
          <LoginLogo />
          <Margin size={40}/>
          <LoginForm successMessage={successMessage} errorMessage={errorMessage} />
          <LoginOptions />
        </PageWrapper>
      </Layout>
    </>
  );
};

export default LoginScreen;

// styled
const Wrapper = styled.View`
  width: 100%;
  flex: 1;
`;
import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

import Layout from "../../components/common/Layout";
import PageWrapper from "../../components/common/PageWrapper";
import Margin from "../../components/common/Margin";
import LoginLogo from "../../components/login/LoginLogo";
import LoginForm from "../../components/login/LoginForm";
import LoginOptions from "../../components/login/LoginOptions";

const LoginScreen = () => {
  return (
    <>
      <Layout>
        <PageWrapper>
          <Margin size={130}/>
          <LoginLogo />
          <Margin size={40}/>
          <LoginForm />
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
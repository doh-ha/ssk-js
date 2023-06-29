import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

import Layout from "../../components/common/Layout";
import PageWrapper from "../../components/common/PageWrapper";
import Header from "../../components/common/Header";

const LoginScreen = () => {
  return (
    <>
      <Layout>
        <PageWrapper>
          <Header text="로그인" type="basic"/>
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
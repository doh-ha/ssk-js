import React from "react";

import Layout from "../../components/common/Layout";
import PageWrapper from "../../components/common/PageWrapper";
import Header from "../../components/common/Header";

const SignUpScreen = () => {
  return (
    <Layout>
      <PageWrapper>
        <Header type="back" text="회원가입" />
      </PageWrapper>
    </Layout>
  );
};

export default SignUpScreen;

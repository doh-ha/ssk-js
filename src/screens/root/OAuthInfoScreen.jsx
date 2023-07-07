import React from "react";
import styled from "styled-components/native";

import WhiteLayout from "../../components/common/WhiteLayout";
import OAuthInfoForm from "../../components/login/OAuthInfoForm";

const OAuthInfoScreen = () => {

  return (
    <WhiteLayout headerText="가입 정보 기입" heaterType="basic">
      <OAuthInfoForm />
    </WhiteLayout>
  );
};

export default OAuthInfoScreen;
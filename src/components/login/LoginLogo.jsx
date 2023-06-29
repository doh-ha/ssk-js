import React from "react";
import styled from "styled-components/native";

const LoginLogo = () => {
  return (
    <ImageWrapper>
      <SubTitle>
        수업        숙제        관리
      </SubTitle>
      <LogoImage
        source={require("../../assets/brands/login.png")}
      />
    </ImageWrapper>
  );
};

export default LoginLogo;

// styled
const ImageWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubTitle = styled.Text`
  color: #818181;
  font-size: 24px;
  font-weight: 600;
  line-height: 45px;
`;

const LogoImage = styled.Image`
  width: 327px;
  height: 153px;
  object-fit: scale-down;
`;
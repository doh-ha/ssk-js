import React from "react";
import styled from "styled-components/native";
import color from "../../common/color";

// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";
import Header from "./Header";

const MainLayout = ({ children, headerText, headerType }) => {
  return (
    <Wrapper>
      <Header text={headerText} type={headerType} />
      <Inner>
        <Contents>{children}</Contents>
      </Inner>
    </Wrapper>
  );
};

export default MainLayout;

const Wrapper = styled(SafeAreaView)`
  width: 100%;
  flex: 1;
  background-color: ${color.COLOR_MAIN};
`;

const Inner = styled.ScrollView`
  width: 100%;
  flex: 1;
  background-color: ${color.COLOR_GRAY_BACKGROUND};
`;

const Contents = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${color.COLOR_GRAY_BACKGROUND};
`;

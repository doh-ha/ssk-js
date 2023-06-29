import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

export default Layout;

// styled
const Wrapper = styled(SafeAreaView)`
  width: 100%;
  flex: 1;
  background-color: #0c9bfb;
`;

const Inner = styled.View`
  width: 100%;
  flex: 1;
  background-color: #f8f9fa;
`;


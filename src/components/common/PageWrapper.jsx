import React from "react";
import styled from "styled-components/native";

const PageWrapper = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default PageWrapper;

// styled
const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
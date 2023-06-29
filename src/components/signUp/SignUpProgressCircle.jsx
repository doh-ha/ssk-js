import React from "react";
import styled from "styled-components/native";

const SignUpProgressCircle = () => {
  return (
    <Wrapper>
      <ProgressCircle />
      <Line />
      <ProgressCircle />
      <Line />
      <ProgressCircle />
    </Wrapper>
  );
};

export default SignUpProgressCircle;

// styled
const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px;
`;

const ProgressCircle = styled.View`
  width: 25px;
  height: 25px;
  background-color: #0C9BFB;
  border-radius: 13px;
`;

const Line = styled.View`
  width: 20px;
  border-top-width: 2px;
  border-top-color: #0C9BFB;
`;
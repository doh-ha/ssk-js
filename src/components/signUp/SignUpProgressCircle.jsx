import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

const SignUpProgressCircle = ({ page }) => {
  const [ isFirst, setIsFirst ] = useState(false);
  const [ isSecond, setIsSecond ] = useState(false);
  const [ isThird, setIsThird ] = useState(false);

  useEffect(() => {
    if (page === "RolePage") {
      setIsFirst(true);
    } else if (page === "BasicInfoPage") {
      setIsFirst(true);
      setIsSecond(true);
    } else {
      setIsFirst(true);
      setIsSecond(true);
      setIsThird(true);
    };
  }, [page]);

  return (
    <Wrapper>
      <ProgressCircle isOn={isFirst} />
      <Line isOn={isSecond} />
      <ProgressCircle isOn={isSecond} />
      <Line isOn={isThird} />
      <ProgressCircle isOn={isThird} />
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
  background-color: ${(props) => props.isOn ? "#0C9BFB" : "#696969" };
  border-radius: 13px;
`;

const Line = styled.View`
  width: 20px;
  border-top-width: 2px;
  border-top-color: ${(props) => props.isOn ? "#0C9BFB" : "#696969" };
`;
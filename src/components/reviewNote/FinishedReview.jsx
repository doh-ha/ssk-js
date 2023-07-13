import React, { useState } from "react";
import styled from "styled-components/native";
import color from "../../common/color";
import { Button } from "react-native";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ReviewItem from "./ReviewItem";

const FinishedReview = () => {
  const [sizes, setSizes] = useState({ width: "100%", height: "200" });
  const changeView = () => {
    if (sizes.width == "0px") {
      setSizes({
        width: "100%",
        height: 200,
      });
    } else {
      setSizes({ width: "0px", height: "0px" });
    }
  };
  return (
    <>
      <ContinuingContainer>
        <ClosedView>
          <BoldText>완료된 복습</BoldText>
          <Ionicons name={sizes.width == "0px" ? "chevron-down-outline" : "chevron-up-outline"} size={32} color="#0C9BFB" onPress={changeView} />
        </ClosedView>
        <OpenedView>
          <Detail sizes={sizes}>
            <Line />
            <ReviewItem>집합과 명제</ReviewItem>
          </Detail>
        </OpenedView>
      </ContinuingContainer>
    </>
  );
};

export default FinishedReview;

const ContinuingContainer = styled.View`
  display: flex;
  //flex-direction: row;
  justify-content: center;
  //background-color: orange;
`;

const BoldText = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: ${color.COLOR_MAIN};
`;

const Line = styled.View`
  width: 100%;
  border-bottom-width: 2px;
  border-bottom-color: #0c9bfb;
`;

const Detail = styled.View`
  width: ${(props) => props.sizes.width};
  height: ${(props) => props.sizes.height};
`;

const ClosedView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const OpenedView = styled.View``;

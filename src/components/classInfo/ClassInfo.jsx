import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";

const ClassInfo = () => {
  return (
    <UserInfoView>
      <UserTextView>
        <SmallText>요일 : 매주 수요일</SmallText>
        <SmallText>사간 : 18:00-19:00</SmallText>
      </UserTextView>
    </UserInfoView>
  );
};

export default ClassInfo;

const UserInfoView = styled.View`
  height: 40;
  flex-direction: row;
  align-items: center;
`;

const UserTextView = styled.View`
  margin-horizontal: 15;
`;

const BigText = styled.Text`
  font-weight: bold;
  font-size: 18;
`;

const SmallText = styled.Text`
  color: ${color.COLOR_GRAY_TEXT};
  margin-top: 3;
`;

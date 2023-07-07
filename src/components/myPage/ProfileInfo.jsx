import axios from "axios";
import React from "react";
import styled from "styled-components/native";

import color from "../../common/color";
import { getData } from "../../constants/asyncStorage";

const ProfileInfo = ({ headerText, contentText, setIsOpened }) => {

  const handleButton = () => {
    setIsOpened(true);
  }

  return (
    <Wrapper>
      <Header>{headerText}</Header>
      <ContentContainer>
        <ContentText>{contentText}</ContentText>
        { headerText === "이름" ? <ChangeButton onPress={handleButton}>
          <ButtonText>이름 변경하기</ButtonText>
        </ChangeButton> 
        : <></>}
      </ContentContainer>
    </Wrapper>
  );
};

export default ProfileInfo;

// styled
const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${color.COLOR_MAIN};
  gap: 12px;
`;

const Header = styled.Text`
  color: ${color.COLOR_MAIN};
  font-size: 14px;
  font-family: "ExtraBold";
`;

const ContentText = styled.Text`
  color: ${color.COLOR_GRAY_TITLE};
  font-size: 16px;
  font-family: "Regular";
`;

const ContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ChangeButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${color.COLOR_MAIN};
  padding: 5px 5px;
  border-radius: 6px;
`;

const ButtonText = styled.Text`
  color: #fff;  
  font-size: 13px;
  font-family: "Medium";
`;
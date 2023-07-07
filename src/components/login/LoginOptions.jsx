import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const LoginOptions = () => {
  const navigation = useNavigation();

  const handleTempButton = () => {
    navigation.navigate("TabNavigator");
  }

  const handleSignUpButton = () => {
    navigation.navigate("SignUpScreen");
  }

  return (
    <Wrapper>
      <OptionSection>      
        <Button
          onPress={handleTempButton}
        >
          <OptionText>
            아이디 찾기
          </OptionText>
        </Button>
        <Button
          onPress={handleTempButton}
        >
          <OptionText>
            비밀번호 찾기
          </OptionText>
        </Button>
      </OptionSection>
      <SignUpSection>
        <DescText>
          아직 수숙관 회원이 아니신가요?
        </DescText>
        <Button
          onPress={handleSignUpButton}
        >
          <SignUpText>
            회원가입 하기
          </SignUpText>
        </Button>
      </SignUpSection>
    </Wrapper>
  );
};

export default LoginOptions;

// styled
const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  gap: 30px;
`;

const OptionSection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const SignUpSection = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #979797;
`;

const SignUpText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #0C9BFB;
`;

const OptionText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #696969;
`;
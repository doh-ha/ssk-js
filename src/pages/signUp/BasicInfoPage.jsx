import React, { useState } from "react";
import styled from "styled-components/native";
import { Keyboard, ScrollView } from "react-native";

const BasicInfoPage = ({ email, password, name, setEmail, setPassword, setName, isKeyboardShown }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("유효한 이메일을 입력해주세요.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("비밀번호는 최소 6자 이상이어야 합니다.");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
    } else if (confirmPassword === "") {
      setConfirmPasswordError("비밀번호 확인을 입력해주세요.")
    } else {
      setConfirmPasswordError("");
    }
  };

  const validateName = () => {
    if (name.trim() === "") {
      setNameError("이름을 입력해주세요.");
    } else {
      setNameError("");
    }
  };

  return (
    <>
      <ScrollView
        scrollEnabled={isKeyboardShown === true ? true : false}
      >
        <Wrapper>
          <ContentWrapper>
            <FormHeader>
              <FormHeaderText>
                이름
              </FormHeaderText>
              <WarningContainer>
                <WarningText>
                  {nameError}
                </WarningText>
              </WarningContainer>
            </FormHeader>
            <FormContainer error={nameError}>
              <SignUpForm
                value={name}
                onChangeText={setName}
                onBlur={validateName}
              />
            </FormContainer>
          </ContentWrapper>
          <ContentWrapper>
            <FormHeader>
              <FormHeaderText>
                이메일
              </FormHeaderText>
              <WarningContainer>
                <WarningText>
                  {emailError}
                </WarningText>
              </WarningContainer>
            </FormHeader>
            <FormContainer error={emailError}>
              <SignUpForm
                value={email}
                onChangeText={setEmail}
                onBlur={validateEmail}
              />
            </FormContainer>
          </ContentWrapper>
          <ContentWrapper>
            <FormHeader>
              <FormHeaderText>
                비밀번호
              </FormHeaderText>
              <WarningContainer>
                <WarningText>
                  {passwordError}
                </WarningText>
              </WarningContainer>
            </FormHeader>
            <FormContainer error={passwordError}>
              <SignUpForm
                value={password}
                onChangeText={setPassword}
                onBlur={validatePassword}
                secureTextEntry
              />
            </FormContainer>
          </ContentWrapper>
          <ContentWrapper>
            <FormHeader>
              <FormHeaderText>
                비밀번호 확인
              </FormHeaderText>
              <WarningContainer>
                <WarningText>
                  {confirmPasswordError}
                </WarningText>
              </WarningContainer>
            </FormHeader>
            <FormContainer error={confirmPasswordError}>
              <SignUpForm
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onBlur={validateConfirmPassword}
                secureTextEntry
              />
            </FormContainer>
          </ContentWrapper>
        </Wrapper>
      </ScrollView>
    </>
  );
};

export default BasicInfoPage;

// styled
const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 15px;
`;

const FormHeader = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 7px;
`;

const FormContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #eaeaea;
  border-color: ${(props) => props.error !== "" ? "#EB4040" : "#eaeaea"};
`;

const FormHeaderText = styled.Text`
  font-size: 16px;
  font-family: "Regular";
  color: #8a8a8a;
`;

const SignUpForm = styled.TextInput`
  width: 100%;
  color: #0C9BFB;
  padding: 15px
`;

const WarningContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const WarningText = styled.Text`
  color: #EB4040;
  font-size: 13px;
`;

const ContentWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
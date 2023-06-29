import React, { useState, useRef } from "react";
import styled from "styled-components/native";

const RolePage = ({ role, setRole }) => {
  const handleTutorButton = () => {
    setRole("Tutor");
  };

  const handleTuteeButton = () => {
    setRole("Tutee");
  };

  return (
    <Wrapper>
      <DescText>
        1. 가입 유형을 선택해주세요.
      </DescText>
      <ButtonContainer
        onPress={handleTutorButton}                
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
          borderWidth: role === "Tutor" ? 2 : 0,
          borderColor: role === "Tutor" ? "#0C9BFB" : "transparent",
        }}
      >
        <RoleText
          style={{
            color: role === "Tutor" ? "#0C9BFB" : "696969",
          }}
        >
          튜터로 가입하기
        </RoleText>
        <MediaContainer>
        </MediaContainer>
      </ButtonContainer>
      <ButtonContainer
        onPress={handleTuteeButton}        
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
          borderWidth: role === "Tutee" ? 2 : 0,
          borderColor: role === "Tutee" ? "#0C9BFB" : "transparent",
        }}
      >
        <RoleText
          style={{
            color: role === "Tutee" ? "#0C9BFB" : "#696969",
          }}
        >
          튜티로 가입하기
        </RoleText>
        <MediaContainer>
        </MediaContainer>
      </ButtonContainer>
    </Wrapper>
  );
};

export default RolePage;

// styled
const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 35px;
`;

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  padding-top: 20px;
`;  

const MediaContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 150px;
  overflow: hidden;
`;

const RoleText = styled.Text`
  font-size: 16px;
  font-family: "Bold";
`;

const DescText = styled.Text`
  font-size: 18px;
  font-family: "ExtraBold";
  color: #696969;
`;
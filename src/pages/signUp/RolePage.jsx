import React, { useState, useRef } from "react";
import styled from "styled-components/native";

const RolePage = ({ role, setRole }) => {
  const handleTutorButton = () => {
    setRole("tutor");
  };

  const handleTuteeButton = () => {
    setRole("tutee");
  };

  return (
    <Wrapper>
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
          borderWidth: role === "tutor" ? 2 : 0,
          borderColor: role === "tutor" ? "#0C9BFB" : "transparent",
        }}
      >
        <RoleText
          style={{
            color: role === "tutor" ? "#0C9BFB" : "696969",
          }}
        >
          튜터로 가입하기
        </RoleText>
        <MediaContainer>
          <RoleImage source={require("../../assets/images/tutorImage.png")} />
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
          borderWidth: role === "tutee" ? 2 : 0,
          borderColor: role === "tutee" ? "#0C9BFB" : "transparent",
        }}
      >
        <RoleText
          style={{
            color: role === "tutee" ? "#0C9BFB" : "#696969",
          }}
        >
          튜티로 가입하기
        </RoleText>
        <MediaContainer>
          <RoleImage source={require("../../assets/images/tuteeImage.png")} />
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  gap: 5px;
`;  

const MediaContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  overflow: hidden;
`;

const RoleImage = styled.Image`
  width: 180px;
  height: 180px;
  object-fit: cover;
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
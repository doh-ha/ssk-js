import React, { useState } from "react";
import styled from "styled-components/native";

import color from "../../common/color";

const CreateClassForm = () => {
  return (
    <Wrapper>
      <FormContainer>
        <TitleText>
          과목 이름
        </TitleText>
      </FormContainer>
    </Wrapper>
  );
};

export default CreateClassForm;

// styled
const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const FormContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
`;

const TitleText = styled.Text`
  padding: 0px 7px;
  color: ${color.COLOR_MAIN};
  font-size: 18px;
  font-style: normal;
  font-family: "Bold";
  line-height: 22px;
`;

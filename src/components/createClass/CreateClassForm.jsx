import React, { useState } from "react";
import styled from "styled-components/native";

import color from "../../common/color";
import TextInputForm from "../inputs/TextInputForm";
import DatePickerForm from "../inputs/DatePickerForm";
import RegularScheduleForm from "../inputs/RegularScheduleForm";

const CreateClassForm = () => {
  return (
    <Wrapper>
      <FormContainer>
        <TextInputForm
          label="과목 이름"
          placeholder={"과목 이름을 입력하세요."}
        />

        <RegularScheduleForm />

        <DatePickerForm label="수업 시작일" />
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
`;

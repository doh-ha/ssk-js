import React, { useState } from "react";
import styled from "styled-components/native";

import color from "../../common/color";

import TextInputForm from "../inputs/TextInputForm";
import DatePickerForm from "../inputs/DatePickerForm";
import RegularScheduleForm from "../inputs/RegularScheduleForm";

const CreateClassForm = () => {
  // 과목 이름
  const [subject, setSubject] = useState("");
  // 정규 일정일: 월(1) ~ 일(7)
  const [days, setDays] = useState(initialDays);

  return (
    <Wrapper>
      <FormContainer>
        <TextInputForm
          label="과목 이름"
          placeholder={"과목 이름을 입력하세요."}
          value={subject}
          onChangeText={setSubject}
        />

        <DatePickerForm label="수업 시작일" />

        <RegularScheduleForm days={days} setDays={setDays} />
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

const initialDays = {
  MON: {
    id: "MON",
    value: 1,
    text: "월",
    selected: false,
    startTime: null,
    endTime: null,
  },
  TUE: {
    id: "TUE",
    value: 2,
    text: "화",
    selected: false,
    startTime: null,
    endTime: null,
  },
  WED: {
    id: "WED",
    value: 3,
    text: "수",
    selected: false,
    startTime: null,
    endTime: null,
  },
  THU: {
    id: "THU",
    value: 4,
    text: "목",
    selected: false,
    startTime: null,
    endTime: null,
  },
  FRI: {
    id: "FRI",
    value: 5,
    text: "금",
    selected: false,
    startTime: null,
    endTime: null,
  },
  SAT: {
    id: "SAT",
    value: 6,
    text: "토",
    selected: false,
    startTime: null,
    endTime: null,
  },
  SUN: {
    id: "SUN",
    value: 7,
    text: "일",
    selected: false,
    startTime: null,
    endTime: null,
  },
};

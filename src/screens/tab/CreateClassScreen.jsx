import React, { useState } from "react";

import styled from "styled-components/native";

import KeyboardAvoidingLayout from "../../components/common/KeyboardAvoidingLayout";
import WhiteLayout from "../../components/common/WhiteLayout";
import TextInputForm from "../../components/inputs/TextInputForm";
import DatePickerForm from "../../components/inputs/DatePickerForm";
import RegularScheduleForm from "../../components/inputs/RegularScheduleForm";
import BigButton from "../../components/common/BigButton";

import { dateToTimeFormat, serverDateFormat } from "../../utils/date";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { APIURL } from "../../config/key";
import client from "../../config/axios";
import { getData } from "../../constants/asyncStorage";

const CreateClassScreen = () => {
  // 과목 이름
  const [subject, setSubject] = useState("");
  // 정규 일정일: 월(1) ~ 일(7)
  const [days, setDays] = useState(initialDays);
  // 수업 시작일
  const [startDate, setStartDate] = useState(new Date());

  const navigation = useNavigation();

  const parseDays = () => {
    const ret = [];

    for (key in days) {
      if (days[key].selected) {
        const day = days[key];
        const item = {
          day: day.value,
          startTime: dateToTimeFormat(day.startTime),
          endTime: dateToTimeFormat(day.endTime),
        };

        ret.push(item);
      }
    }

    return ret;
  };

  const handleCreateClass = async () => {
    const dayTimeList = parseDays();

    const body = {
      subject,
      startDate: serverDateFormat(startDate),
      dayTimeList,
    };

    try {
      const ret = await client.post("/api/tutoring", body);

      if (ret.status === 200) {
        navigation.navigate("HomeScreen");
      } else {
        console.log("Create class: Something went wrong");
      }
    } catch (err) {
      console.log("Create class request fail: ", err);
    }
  };

  return (
    <KeyboardAvoidingLayout>
      <WhiteLayout headerText={"수업 생성"} headerType={"back"}>
        <Wrapper>
          <TextInputForm
            label="과목 이름"
            placeholder={"과목 이름을 입력하세요."}
            value={subject}
            onChangeText={setSubject}
          />

          <DatePickerForm
            label="수업 시작일"
            date={startDate}
            setDate={setStartDate}
          />

          <RegularScheduleForm days={days} setDays={setDays} />
        </Wrapper>
      </WhiteLayout>

      <BigButton onPress={handleCreateClass} text="수업 생성" />
    </KeyboardAvoidingLayout>
  );
};

export default CreateClassScreen;

// styled
const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-vertical: 15;
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

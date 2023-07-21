import React, { useState } from "react";

import styled from "styled-components/native";
import color from "../../common/color";

import client from "../../config/axios";

import BottomSheet from "../common/BottomSheet";
import CalendarBSheetHeader from "./CalendarBSheetHeader";
import TimePicker from "../common/TimePicker";
import DropDownForm from "../inputs/DropDownForm";

import { dateToTimeFormat, serverDateFormat } from "../../utils/date";

const dummyList = ["영어 과외 수업", "피아노 수업"];

const CreateScheduleBSheet = ({ rbRef, date, edit }) => {
  const today = new Date();
  const [startTime, setStartTime] = useState(today);
  const [endTime, setEndTime] = useState(today);

  // 일정 등록 버튼
  const handlePressButton = async () => {
    try {
      // tutoringId, date(YYYY-MM-DD), startTime(TT:mm), endTime(TT:mm)
      const data = {
        tutoringId: "",
        date: serverDateFormat(date),
        startTime: dateToTimeFormat(startTime),
        endTime: dateToTimeFormat(endTime),
      };

      const ret = await client.post("/api/schedule", data);

      if (ret.status == 200) {
        rbRef?.current?.close();
      } else if (ret.status == 409) {
        console.log("create schedule: conflict");
      } else if (ret.status == 400) {
        console.log("create schedule: not found");
      }
    } catch (err) {
      console.log("일정 등록 api 실패: ", err);
    }
  };

  return (
    <>
      <BottomSheet rbRef={rbRef} heightPercentage={0.6} button="일정 등록">
        <CalendarBSheetHeader date={date} edit={edit} />

        <DropDownForm
          label="수업 선택"
          placeholder={"수업을 선택해주세요."}
          list={dummyList}
          paddingHorizontal={0}
        />

        <TimePickerContainer>
          <TimePicker
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
          />
        </TimePickerContainer>
      </BottomSheet>
    </>
  );
};

export default CreateScheduleBSheet;

const TimePickerContainer = styled.View`
  margin-vertical: 15;
`;

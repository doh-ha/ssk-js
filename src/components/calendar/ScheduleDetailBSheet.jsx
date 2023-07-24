import React, { useState } from "react";

import styled from "styled-components/native";
import color from "../../common/color";
import tags from "../../common/tags";

import BottomSheet from "../common/BottomSheet";
import CalendarBSheetHeader from "./CalendarBSheetHeader";
import CalendarUserInfo from "./CalendarUserInfo";
import LeftBarContainer from "../common/LeftBarContainer";
import TimePicker from "../common/TimePicker";
import SelectTag from "../inputs/SelectTag";

const ScheduleDetailBSheet = ({ rbRef, schedule, date, edit }) => {
  const today = new Date();
  const [startTime, setStartTime] = useState(today);
  const [endTime, setEndTime] = useState(today);

  const [tag, setTag] = useState(tags.MAINBLUE);
  const [description, setDescription] = useState("");

  const handlePressButton = () => {
    rbRef?.current?.close();
  };

  return (
    <>
      <BottomSheet
        rbRef={rbRef}
        heightPercentage={0.9}
        button={edit ? "편집" : null}
        handlePressButton={handlePressButton}
      >
        <CalendarBSheetHeader date={date} edit={edit} />

        <LeftBarContainer label="Tutor">
          <CalendarUserInfo />
        </LeftBarContainer>

        <LeftBarContainer label="Tutee">
          <CalendarUserInfo />
        </LeftBarContainer>

        <TimePicker
          startTime={startTime}
          setStartTime={setStartTime}
          endTime={endTime}
          setEndTime={setEndTime}
        />

        <LeftBarContainer label="Description">
          <DescriptionInput
            multiline={true} //여러줄 입력가능
            textAlignVertical="top" //처음부터 시작 (기본값은 center)
            placeholder="내용을 입력하세요."
            value={description}
            onChangeText={setDescription}
          />
        </LeftBarContainer>

        <SelectTag tag={tag} setTag={setTag} />
      </BottomSheet>
    </>
  );
};

export default ScheduleDetailBSheet;

const DescriptionInput = styled.TextInput`
  background-color: ${color.COLOR_WHITE_BACKGROUND};
  border-width: 1;
  border-color: ${color.COLOR_GRAY_BORDER};
  width: 100%;
  height: 150;
  border-radius: 5;
  padding: 7px;
`;

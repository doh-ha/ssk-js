import React, { useRef } from "react";
import styled from "styled-components/native";

import color from "../../common/color";

import BottomSheet from "../common/BottomSheet";
import CalendarBSheetHeader from "./CalendarBSheetHeader";

import ScheduleItem from "./ScheduleItem";

import { Platform, FlatList } from "react-native";
import useIsTutor from "../../hooks/useIsTutor";
import CreateScheduleBSheet from "./CreateScheduleBSheet";

const CalendarListBSheet = ({ rbRef, selectedItem }) => {
  const isTutor = useIsTutor();

  const createScheduleRbRef = useRef();

  const handlePressButton = () => {
    createScheduleRbRef.current.open();
  };

  return (
    <>
      <BottomSheet
        rbRef={rbRef}
        heightPercentage={0.6}
        button={isTutor ? "일정 추가" : null}
        handlePressButton={handlePressButton}
      >
        <CalendarBSheetHeader date={selectedItem.date} edit={isTutor} />

        <FlatList
          style={{
            overflow: "visible",
          }}
          data={[0, 1, 2, 3]}
          renderItem={({ item }) => <ScheduleItem {...item} />}
        />

        {/* 일정 추가 바텀시트 */}
        <CreateScheduleBSheet
          rbRef={createScheduleRbRef}
          date={selectedItem.date}
          edit={isTutor}
        />
      </BottomSheet>
    </>
  );
};

export default CalendarListBSheet;

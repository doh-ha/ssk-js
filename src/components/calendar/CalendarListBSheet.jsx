import React from "react";
import styled from "styled-components/native";

import color from "../../common/color";

import BottomSheet from "../common/BottomSheet";
import CalendarBSheetHeader from "./CalendarBSheetHeader";

import ScheduleItem from "./ScheduleItem";

const CalendarListBSheet = ({ rbRef, selectedItem }) => {
  return (
    <>
      <BottomSheet rbRef={rbRef} heightPercentage={0.6}>
        <CalendarBSheetHeader date={selectedItem.date} edit={true} />

        <ScheduleList data={[0, 1, 2, 3]} renderItem={ScheduleItem} />
      </BottomSheet>
    </>
  );
};

export default CalendarListBSheet;

const ScheduleList = styled.FlatList`
  // background-color: orange;
  overflow: auto;
`;

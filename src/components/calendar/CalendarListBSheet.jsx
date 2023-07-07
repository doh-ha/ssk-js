import React from "react";
import styled from "styled-components/native";

import color from "../../common/color";

import BottomSheet from "../common/BottomSheet";
import CalendarBSheetHeader from "./CalendarBSheetHeader";

import ScheduleItem from "./ScheduleItem";

import { Platform, FlatList } from "react-native";

const CalendarListBSheet = ({ rbRef, selectedItem }) => {
  return (
    <>
      <BottomSheet rbRef={rbRef} heightPercentage={0.6}>
        <CalendarBSheetHeader date={selectedItem.date} edit={true} />

        <FlatList
          style={{
            overflow: "visible",
          }}
          data={[0, 1, 2, 3]}
          renderItem={ScheduleItem}
        />
      </BottomSheet>
    </>
  );
};

export default CalendarListBSheet;

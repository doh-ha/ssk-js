import React from "react";
import BottomSheet from "../common/BottomSheet";
import CalendarBSheetHeader from "./CalendarBSheetHeader";

const ScheduleDetailBSheet = ({ rbRef, schedule, date, edit }) => {
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
      </BottomSheet>
    </>
  );
};

export default ScheduleDetailBSheet;

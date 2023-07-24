import React, { useEffect, useState } from "react";

import styled from "styled-components/native";

import { useNavigation, useRoute } from "@react-navigation/native";

import MainLayout from "../../components/common/MainLayout";
import Calendar from "../../components/calendar/Calendar";
import HwNotePreview from "../../components/homeworkNote/HwNotePreview";
import ReviewNotePreview from "../../components/reviewNote/ReviewNotePreview";
import StudentInfo from "../../components/classInfo/StudentInfo";
import TeacherInfo from "../../components/classInfo/TeacherInfo";
import SubLayout from "../../components/common/SubLayout";
import ClassInfo from "../../components/classInfo/ClassInfo";
import client from "../../config/axios";

const ClassInfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { tutoringId } = route.params;

  const [date, setDate] = useState(new Date());
  // assignmentList, color, dayTimeList, noteList, parentName
  // reviewList, scheduleList, startDate, subject, tuteeName
  // tutorName, tutoringId
  const [classInfo, setClassInfo] = useState(null);

  const handlePressHwBtn = () => {
    navigation.navigate("HwListPage");
  };
  const handlePressReviewBtn = () => {
    navigation.navigate("ReviewListPage");
  };

  const getClassInfo = async () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    try {
      const ret = await client.get(
        `/api/tutoring/detail/${tutoringId}/${year}/${month}`
      );

      console.log(ret.status);
      console.log(ret.data);

      if (ret.status == 200) {
        setClassInfo(ret.data);
      }
    } catch (err) {
      console.log("get class detail info error: ", err);
    }
  };

  useEffect(() => {
    getClassInfo();
  }, [date]);

  if (!classInfo) {
    return null;
  }

  return (
    <MainLayout headerText={"수업 정보"} headerType={"back"}>
      <SubLayout>
        <InfroWrapper>
          <TeacherInfo />
          <StudentInfo />
          <ClassInfo />
        </InfroWrapper>
      </SubLayout>
      <Calendar
        dayTimeList={classInfo?.dayTimeList}
        onChangeDate={(date) => {
          setDate(date);
        }}
      />
      <SubLayout>
        <TouchableArea onPress={handlePressHwBtn}>
          <HwNotePreview />
        </TouchableArea>
        <TouchableArea onPress={handlePressReviewBtn}>
          <ReviewNotePreview />
        </TouchableArea>
      </SubLayout>
    </MainLayout>
  );
};

export default ClassInfoScreen;

const TouchableArea = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  activeopacity: 0.8;
`;
const Wrapper = styled.View`
  margin-vertical: 15;
  padding-horizontal: 20;
`;

const InfroWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: 25;
`;

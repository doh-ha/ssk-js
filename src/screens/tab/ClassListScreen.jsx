import React, { useEffect, useState } from "react";

import styled from "styled-components/native";

import MainLayout from "../../components/common/MainLayout";
import CircleIconButton from "../../components/common/CircleIconButton";
import ClassList from "../../components/common/ClassList";

import client from "../../config/axios";
import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";

const ClassListScreen = () => {
  // 학생 => [{ tutoringId, subject, tutorName }]
  // 선생 => [{ tutoringId, subject, tuteeName }]
  const [classList, setClassList] = useState(null);
  const [loading, setLoading] = useState(false);

  const getClassList = async () => {
    setLoading(true);

    try {
      const ret = await client.get("/api/tutoring/list");
      // console.log(ret.status);
      // console.log(ret.data);
      if (ret.status == 200) {
        setClassList(ret.data);
      }
    } catch (err) {
      console.log("get class list error: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getClassList();
  }, []);

  return (
    <>
      <MainLayout headerText={"수업 목록"} headerType={"basic"}>
        {loading ? (
          <Loading />
        ) : classList ? (
          <ClassListWrapper>
            <ClassList classList={classList} />
          </ClassListWrapper>
        ) : (
          <ErrorMessage />
        )}
      </MainLayout>

      <CircleIconButton name="user-plus" size={17} />
    </>
  );
};

export default ClassListScreen;

const ClassListWrapper = styled.View`
  margin-vertical: 10;
`;

import React from "react";

import MainLayout from "../../components/common/MainLayout";
import Calendar from "../../components/calendar/Calendar";

const HomeScreen = () => {
  return (
    <MainLayout headerText={"홈"} headerType={"basic"}>
      <Calendar />
    </MainLayout>
  );
};

export default HomeScreen;

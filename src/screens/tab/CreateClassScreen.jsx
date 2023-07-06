import React from "react";

import WhiteLayout from "../../components/common/WhiteLayout";
import CreateClassForm from "../../components/createClass/CreateClassForm";

const CreateClassScreen = () => {

  return (
    <WhiteLayout headerText={"수업 생성"} headerType={"back"}>
      <CreateClassForm />
    </WhiteLayout>
  );
};

export default CreateClassScreen;


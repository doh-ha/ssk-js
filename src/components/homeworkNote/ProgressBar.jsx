import React from "react";
import styled from "styled-components/native";
import color from "../../common/color";
import * as Progress from "react-native-progress";

const ProgressBar = ({ tasks }) => {
  if (!tasks) {
    // Handle case when tasks prop is undefined or null
    return null; // or return a fallback UI if desired
  }
  const tasksValue = Object.values(tasks);
  const length = tasksValue.length;
  const completed = tasksValue.filter((task) => task.completed === true).length;
  let progress = 0;
  // 분모가 0이 되지 않도록 체크
  if (length !== 0) {
    progress = completed / length;
  }
  return (
    <BarView>
      <Bar>
        <Progress.Bar progress={progress} width={null} height={8} color={"rgba(51, 65, 159, 0.8)"} />
      </Bar>
      <BarText>
        {completed}/{length}
      </BarText>
    </BarView>
  );
};
export default ProgressBar;

const BarView = styled.View`
  width: 100%;
  padding: 0 15px;
  flex-direction: row;
  margin-top: 20px;
`;

const Bar = styled.View`
  margin: 10px 0;
  flex: 1;
`;

const BarText = styled.Text`
  width: 40px;
  text-align: center;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fontSub};
  padding: 3px 0 0 5px;
`;

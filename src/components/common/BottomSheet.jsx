import React from "react";
import styled from "styled-components/native";
import { Dimensions, TouchableOpacity } from "react-native";

import RBSheet from "react-native-raw-bottom-sheet";
import color from "../../common/color";

const windowHeight = Dimensions.get("window").height;

const BottomSheet = ({
  children,
  rbRef,
  heightPercentage = 0.5,
  onClose = () => {},
}) => {
  return (
    <>
      <RBSheet
        ref={rbRef}
        height={windowHeight * heightPercentage}
        onClose={onClose}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: color.COLOR_BSHEET_BACKGROUND,
          },
          draggableIcon: {
            backgroundColor: color.COLOR_TAB_ICON,
          },
          container: {
            backgroundColor: color.COLOR_WHITE_BACKGROUND,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}
      >
        <Contents scrollEnabled={true}>
          <TouchableOpacity
            style={{
              paddingBottom: windowHeight * 0.07,
              height: "100%",
            }}
            activeOpacity={1}
          >
            {children}
          </TouchableOpacity>
        </Contents>
      </RBSheet>
    </>
  );
};

export default BottomSheet;

const Contents = styled.ScrollView`
  // background-color: whitesmoke;
  height: 100%;
  padding-horizontal: 20;
  padding-vertical: 10;
`;

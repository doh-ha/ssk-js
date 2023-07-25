import React, { useState } from "react";

import styled from "styled-components/native";
import color from "../../common/color";

import { FontAwesome5 } from "@expo/vector-icons";

import InputContainer from "./InputContainer";
import { TouchableOpacity } from "react-native";

const DropDownForm = ({
  label,
  placeholder,
  list,
  paddingHorizontal,
  menuHeight = 200,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handlePressItem = (item) => {
    setIsOpenMenu(false);
    setSelectedItem(item);
  };

  return (
    <>
      <InputContainer label={label} paddingHorizontal={paddingHorizontal}>
        <Container onPress={handleToggle}>
          <SelectedText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={selectedItem ? {} : { color: color.COLOR_LIGHTGRAY_TEXT }}
          >
            {selectedItem ? selectedItem : placeholder}
          </SelectedText>

          <FontAwesome5
            name={isOpenMenu ? "chevron-up" : "chevron-down"}
            size={16}
            color={color.COLOR_MAIN}
          />
        </Container>

        {isOpenMenu && (
          <ListContainer scrollEnabled={true} menuHeight={menuHeight}>
            <TouchableOpacity activeOpacity={1} style={{ paddingVertical: 5 }}>
              {list.map((item, idx) => (
                <ListItem key={idx} onPress={handlePressItem.bind(this, item)}>
                  {item}
                </ListItem>
              ))}
            </TouchableOpacity>
          </ListContainer>
        )}
      </InputContainer>
    </>
  );
};

export default DropDownForm;

const Container = styled.Pressable`
  width: 100%;
  height: 100%;
  background-color: ${color.COLOR_WHITE_BACKGROUND};
  border-color: ${color.COLOR_MAIN};
  border-width: 1;
  border-radius: 5;
  padding-horizontal: 15;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SelectedText = styled.Text`
  width: 88%;
  font-size: 16;
`;

const ListContainer = styled.ScrollView`
  position: absolute;
  bottom: ${({ menuHeight }) => `-${menuHeight + 2}`};
  left: 0;
  z-index: 10;
  width: 100%;
  height: ${({ menuHeight }) => menuHeight};
  background-color: ${color.COLOR_WHITE_BACKGROUND};
  border-color: ${color.COLOR_MAIN};
  border-width: 1;
  border-radius: 5;
  padding-horizontal: 15;
`;

const ListItem = styled.Text`
  //   background-color: orange;
  width: 100%;
  padding-vertical: 10;
  font-size: 16;
`;

import React from "react";

import styled from "styled-components/native";
import color from "../../common/color";

import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const CircleIconButton = ({ btnColor = color.COLOR_MAIN, name, onPress = () => {} }) => {
  return (
    <Container>
      <Button style={styles.button} btnColor={btnColor} onPress={onPress}>
        <FontAwesome5 name={name} size={20} color={"#fff"} />
      </Button>
    </Container>
  );
};

export default CircleIconButton;

const styles = StyleSheet.create({
  button: {
    shadowColor: color.COLOR_BOX_SHADOW,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

const Container = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
`;

const Button = styled.Pressable`
  background-color: ${({ btnColor }) => btnColor};
  width: 40;
  height: 40;
  border-radius: 100;
  justify-content: center;
  align-items: center;
`;

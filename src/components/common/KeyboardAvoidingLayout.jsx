import React from "react";

import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

const KeyboardAvoidingLayout = ({ children }) => {
  return (
    <KeyboardAvoidingView
      //   behavior={Platform.OS === "ios" ? "padding" : "height"}
      behavior="height"
      style={styles.container}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

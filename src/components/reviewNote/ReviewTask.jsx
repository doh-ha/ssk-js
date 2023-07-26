import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import MainLayout from "../../components/common/MainLayout";
import ContinuingReview from "../../components/reviewNote/ContinuingReview";
import color from "../../common/color";
import { Ionicons } from "@expo/vector-icons";
import FinishedReview from "../../components/reviewNote/FinishedReview";
import KeyboardAvoidingLayout from "../../components/common/KeyboardAvoidingLayout";
import TextInputForm from "../../components/inputs/TextInputForm";
import { TouchableOpacity, TextInput, StyleSheet, View, ScrollView, Text } from "react-native";
import NoteTop from "./NoteTop";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BouncyCheckbox from "react-native-bouncy-checkbox";
const ReviewTask = () => {
  const initialState = { id: 0, content: "", completed: false };

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState(initialState);

  const getTasks = async () => {
    const tasks = await AsyncStorage.getItem("task");
    setTask(JSON.parse(tasks) ? JSON.parse(tasks) : []);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleChange = (content, value) => setNewTask({ ...newTask, [content]: value });

  const clear = () => setNewTask(initialState);

  const addTask = () => {
    newTask.id = task.length + 1;
    const updatedTask = [newTask, ...task];
    setTask(updatedTask);
    AsyncStorage.setItem("task", JSON.stringify(updatedTask));
    clear();
  };
  const updateTask = (item) => {
    const itemToBeUpdated = task.filter((taskItem) => taskItem.id == item.id);
    itemToBeUpdated[0].completed = !itemToBeUpdated[0].completed;

    const remainingTasks = task.filter((taskItem) => taskItem.id != item.id);
    const updatedTask = [...itemToBeUpdated, ...remainingTasks];

    setTask(updatedTask);
    AsyncStorage.setItem("task", JSON.stringify(updatedTask));
  };

  const onPress = () => {
    console.log(task);
  };

  const displayTask = (item) => (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        paddingVertical: 16,
      }}
      onPress={() =>
        Alert.alert(`${item.title}`, `${item.description}`, [
          {
            text: item.completed ? "Mark InProgress" : "Mark Completed",
            onPress: () => updateTask(item),
          },
          {
            text: "Ok",
            style: "cancel",
          },
        ])
      }
    >
      <BouncyCheckbox isChecked={item.completed ? true : false} fillColor="blue" onPress={() => updateTask(item)} />
      <Text
        style={{
          color: "#000",
          width: "90%",
          fontSize: 16,
          textDecorationLine: item.completed ? "line-through" : "none",
        }}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
  return (
    <KeyboardAvoidingLayout>
      <ContinuingReview />
      <ScrollView>
        <View style={{ height: 250 }}>{task.map((item) => (!item.completed ? displayTask(item) : null))}</View>
      </ScrollView>
      <FinishedReview />
      <ScrollView>
        <View style={{ height: 250 }}>{task.map((item) => (item.completed ? displayTask(item) : null))}</View>
      </ScrollView>
      <InputWrapper>
        <Container>
          <TextInput style={styles.inputField} onChangeText={(text) => setTask(text)} placeholder={"Write a task"} value={newTask.content} />
        </Container>
        <TouchableOpacity onPress={addTask}>
          <View style={styles.button}>
            <Ionicons name="arrow-up-outline" size={30} color="#0C9BFB" onPress={addTask} />
          </View>
        </TouchableOpacity>
      </InputWrapper>
    </KeyboardAvoidingLayout>
  );
};

export default ReviewTask;

const InnerWrapper = styled.View`
  margin-horizontal: 20;
`;

const InputWrapper = styled.View`
  flex-direction: row;
`;

const Container = styled.TextInput`
  width: 80%;
  height: 100%;
  background-color: ${color.COLOR_WHITE_BACKGROUND};
  border-color: ${color.COLOR_MAIN};
  border-width: 1;
  border-radius: 5;
  padding-horizontal: 15;
  margin-horizontal: 15;
  font-size: 16;
  align-items: center;
`;

const styles = StyleSheet.create({
  inputField: {
    color: "#fff",
    height: 50,
    flex: 1,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

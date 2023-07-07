import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/tab/HomeScreen";
import CreateClassScreen from "../screens/tab/CreateClassScreen";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateClassScreen"
        component={CreateClassScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/root/LoginScreen";

const Stack = createNativeStackNavigator(); // Stack 네비게이터 생성
const RootNavigator = () => {

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
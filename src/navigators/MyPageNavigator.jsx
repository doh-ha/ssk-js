import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyPageScreen from "../screens/tab/MyPageScreen";

const Stack = createNativeStackNavigator();

const MyPageNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MyPageScreen">
      <Stack.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MyPageNavigator;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyPageScreen from "../screens/myPage/MyPageScreen";
import MyPageNotificationScreen from "../screens/myPage/MyPageNotificationScreen";

const Stack = createNativeStackNavigator();

const MyPageNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MyPageScreen">
      <Stack.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyPageNotificationScreen"
        component={MyPageNotificationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MyPageNavigator;

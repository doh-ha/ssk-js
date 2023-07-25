import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ClassListScreen from "../screens/tab/ClassListScreen";
import ClassInfoScreen from "../screens/ClassInfo/ClassInfoScreen";
import HwListPage from "../pages/Hw/HwListPage";
import ReviewListPage from "../pages/review/ReviewListPage";
import HwFeedPage from "../pages/Hw/HwFeedPage";

const Stack = createNativeStackNavigator();

const ClassListNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ClassListScreen">
      <Stack.Screen
        name="ClassListScreen"
        component={ClassListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClassInfoScreen"
        component={ClassInfoScreen}
        options={{ headerShown: false }}
        initialParams={{ tutoringId: null }}
      />
      <Stack.Screen
        name="HwListPage"
        component={HwListPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReviewListPage"
        component={ReviewListPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HwFeedPage"
        component={HwFeedPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ClassListNavigator;

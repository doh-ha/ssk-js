import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ClassListScreen from "../screens/tab/ClassListScreen";
import ClassInfoScreen from "../screens/ClassInfo/ClassInfoScreen";
import HwListPage from "../pages/Hw/HwListPage";
import ReviewListPage from "../pages/review/ReviewListPage";

const Stack = createNativeStackNavigator();

const ClassListNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ClassListScreen">
      <Stack.Screen name="ClassListScreen" component={ClassListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ClassInfoScreen" component={ClassInfoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HwListPage" component={HwListPage} options={{ headerShown: false }} />
      <Stack.Screen name="ReviewListPage" component={ReviewListPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default ClassListNavigator;

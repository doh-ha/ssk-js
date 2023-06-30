import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

import HomeScreen from "../screens/tab/HomeScreen";
import ClassListScreen from "../screens/tab/ClassListScreen";
import MyPageScreen from "../screens/tab/MyPageScreen";
import color from "../common/color";

const TabBar = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabBar.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: color.COLOR_WHITE_BACKGROUND,
          shadowColor: color.COLOR_BOX_SHADOW,
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.2,
        },
      }}
    >
      <TabBar.Screen
        name="ClassList"
        component={ClassListScreen}
        options={{
          headerShown: false,
          tabBarLabel: "수업 목록",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="list-ul"
              size={25}
              color={focused ? color.COLOR_MAIN : color.COLOR_TAB_ICON}
            />
          ),
        }}
      />
      <TabBar.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "홈",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={30}
              color={focused ? color.COLOR_MAIN : color.COLOR_TAB_ICON}
            />
          ),
        }}
      />
      <TabBar.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          headerShown: false,
          tabBarLabel: "마이 페이지",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-alt"
              size={25}
              color={focused ? color.COLOR_MAIN : color.COLOR_TAB_ICON}
            />
          ),
        }}
      />
    </TabBar.Navigator>
  );
};

export default TabNavigator;

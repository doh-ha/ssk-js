import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";

import RootNavigator from "./src/navigators/RootNavigator";

export default function App () {

  Font.loadAsync({
    Light: require("./src/global/fonts/NanumSquareL.ttf"),
    Regular: require("./src/global/fonts/NanumSquareR.ttf"),
    Medium: require("./src/global/fonts/NanumSquare.ttf"),
    Bold: require("./src/global/fonts/NanumSquareB.ttf"),
    ExtraBold: require("./src/global/fonts/NanumSquareEB.ttf"),
  });

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};


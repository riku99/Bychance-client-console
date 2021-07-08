import React from "react";
import { Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";
import { ToastProvider } from "react-native-fast-toast";

import { store } from "~/stores";
import { Root } from "./Root";

export const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <ToastProvider placement="bottom" offset={bottomToastOffset}>
            <Root />
          </ToastProvider>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

const { height } = Dimensions.get("screen");

const bottomToastOffset = height * 0.1;

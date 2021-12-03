import React from "react";
import { Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider } from "react-redux";
import { ToastProvider } from "react-native-fast-toast";
import { defaultTheme } from "~/styles";
import Config from "react-native-config";
import { store } from "~/stores";
import { Root } from "./Root";

export const App = () => {
  console.log("🌍 env is " + Config.ENV);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer theme={myNavigationTheme}>
          <ToastProvider
            placement="bottom"
            offset={bottomToastOffset}
            duration={2000}
            style={{ width: bottomToastWidth }}
          >
            <Root />
          </ToastProvider>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

const myNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#f2f5ff",
    primary: defaultTheme.main,
  },
};

const { height, width } = Dimensions.get("screen");

const bottomToastOffset = height * 0.1;

const bottomToastWidth = width * 0.9;

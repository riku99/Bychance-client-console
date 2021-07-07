import React from "react";
import { Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { store } from "~/stores";

export const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Text>Hello RN</Text>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

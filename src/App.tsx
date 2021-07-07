import React from "react";
import { Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

export const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Text>Hello RN</Text>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

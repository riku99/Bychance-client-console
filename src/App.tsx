import React from "react";
import { Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Hello RN</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

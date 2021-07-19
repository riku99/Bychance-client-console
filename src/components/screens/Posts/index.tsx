import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { defaultTheme } from "~/styles";
import { Past } from "./Past";
import { Now } from "./Now";

const Tab = createMaterialTopTabNavigator();

export const Posts = React.memo(() => {
  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ marginTop: top }}
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: defaultTheme.mainColor,
        },
      }}
    >
      <Tab.Screen
        name="Past"
        component={Past}
        options={{ tabBarLabel: "過去の投稿" }}
      />
      <Tab.Screen
        name="Now"
        component={Now}
        options={{ tabBarLabel: "現在表示されている投稿" }}
      />
    </Tab.Navigator>
  );
});

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

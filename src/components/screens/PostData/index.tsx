import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { defaultTheme } from "~/styles";
import { Past } from "./Past";
import { Now } from "./Now";

const Tab = createMaterialTopTabNavigator();

export const PostData = React.memo(() => {
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
        name="Now"
        component={Now}
        options={{ tabBarLabel: "表示中の投稿" }}
      />
      <Tab.Screen
        name="Past"
        component={Past}
        options={{ tabBarLabel: "過去の投稿" }}
      />
    </Tab.Navigator>
  );
});

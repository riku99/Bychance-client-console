import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "~/components/screens/Home";

export type HomeStackParamList = {
  home: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeStackScreen = React.memo(() => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home"
        component={Home}
        options={{ headerTitle: "ホーム画面" }}
      />
    </HomeStack.Navigator>
  );
});

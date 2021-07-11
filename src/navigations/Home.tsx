import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "~/components/screens/Home";
import { UserEdit } from "~/components/screens/UserEdit";

export type HomeStackParamList = {
  Home: undefined;
  Edit: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeStackScreen = React.memo(() => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "ホーム画面" }}
      />
      <HomeStack.Screen
        name="Edit"
        component={UserEdit}
        options={{ headerTitle: "編集" }}
      />
    </HomeStack.Navigator>
  );
});

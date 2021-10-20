import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Post } from "~/components/screens/CreatePost";
import { Tabs } from "./Tab";

export type MainStackParamList = {
  Tab: undefined;
  Post: undefined;
};

export type MainNavigationProp<T extends keyof MainStackParamList> =
  StackNavigationProp<MainStackParamList, T>;

const MainStack = createStackNavigator<MainStackParamList>();

export const MainStackScreen = React.memo(() => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Tab"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Post"
        component={Post}
        options={{ headerTitle: "掲載", headerBackTitleVisible: false }}
      />
    </MainStack.Navigator>
  );
});

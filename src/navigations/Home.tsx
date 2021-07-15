import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Home } from "~/components/screens/Home";
import { UserEditStackScreen } from "./UserEdit";
import { Post } from "~/components/screens/Post";

export type HomeStackParamList = {
  Home: undefined;
  Edit: undefined;
  Post: undefined;
};

export type HomeNavigationProp<T extends keyof HomeStackParamList> =
  StackNavigationProp<HomeStackParamList, T>;

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
        component={UserEditStackScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Post"
        component={Post}
        options={{ headerTitle: "掲載" }}
      />
    </HomeStack.Navigator>
  );
});

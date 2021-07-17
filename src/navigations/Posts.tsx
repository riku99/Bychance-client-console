import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Posts } from "~/components/screens/Posts";

export type PostsParamList = {
  list: undefined;
  detail: undefined;
};

export type PostNavigationProp<T extends keyof PostsParamList> =
  StackNavigationProp<PostsParamList, T>;

const Stack = createStackNavigator<PostsParamList>();

export const PostsStackScreen = React.memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="list"
        component={Posts}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

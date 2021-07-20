import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { Recommendation } from "bychance-components";

import { PostData } from "~/components/screens/PostData";
import { Detail } from "~/components/screens/PostDetail";

export type PostsParamList = {
  list: undefined;
  detail: Recommendation;
};

export type PostsNavigationProp<T extends keyof PostsParamList> =
  StackNavigationProp<PostsParamList, T>;

const Stack = createStackNavigator<PostsParamList>();

export const PostDataStackScreen = React.memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="list"
        component={PostData}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="detail"
        component={Detail}
        options={{
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTitle: "",
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
});

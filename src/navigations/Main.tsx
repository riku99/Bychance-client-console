import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Tabs } from "./Tab";

export type MainStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Tab: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export const MainStackScreen = React.memo(() => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Tab"
        component={Tabs}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
});

import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { useHandleErrors } from "~/hooks/errors";

export type MainStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Tab: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export const MainStackScreen = React.memo(() => {
  useHandleErrors();

  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Tab" component={() => null} />
    </MainStack.Navigator>
  );
});

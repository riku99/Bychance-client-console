import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { SignUp } from "~/components/screens/SignUp";

export type AuthStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthStackScreen = React.memo(() => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerTitle: "登録" }}
      />
      <AuthStack.Screen name="SignIn" component={() => null} />
    </AuthStack.Navigator>
  );
});

import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Settings } from "~/components/screens/Settings";
import { PasswordResetAuthCode } from "~/components/screens/PasswordResetAuthCode";

type SettingsPatamList = {
  main: undefined;
  passwordResetAuthCode: undefined;
};

export type SettingsNavigationProp<T extends keyof SettingsPatamList> =
  StackNavigationProp<SettingsPatamList, T>;

const Stack = createStackNavigator<SettingsPatamList>();

export const SettingsStackScreen = React.memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Settings}
        options={{ headerTitle: "設定" }}
      />
      <Stack.Screen
        name="passwordResetAuthCode"
        component={PasswordResetAuthCode}
        options={{
          headerTitle: "認証コード入力",
        }}
      />
    </Stack.Navigator>
  );
});

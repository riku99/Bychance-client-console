import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { AuthCode } from "~/components/utils/AuthCode";

import { Settings } from "~/components/screens/Settings";

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
        component={AuthCode}
        options={{
          headerTitle: "認証コード入力",
        }}
      />
    </Stack.Navigator>
  );
});

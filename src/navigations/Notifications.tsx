import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Notifications } from "~/components/screens/Notificatoin";

export type NotificationStackParamList = {
  List: undefined;
};

export type NotificationsNavigationProp<
  T extends keyof NotificationStackParamList
> = StackNavigationProp<NotificationStackParamList, T>;

const Stack = createStackNavigator<NotificationStackParamList>();

export const NotificationsStackScreen = React.memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={Notifications}
        options={{ headerTitle: "お知らせ" }}
      />
    </Stack.Navigator>
  );
});

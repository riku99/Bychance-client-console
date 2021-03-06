import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Notifications } from "~/components/screens/Notificatoin";
import { NotificationDetail } from "~/components/screens/NotificationDetail";

export type NotificationStackParamList = {
  List: undefined;
  Detail: { id: number; title: string; createdAt: string; text: string };
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
      <Stack.Screen
        name="Detail"
        component={NotificationDetail}
        options={{
          headerTitle: "お知らせ",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
});

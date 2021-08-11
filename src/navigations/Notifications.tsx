import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Notifications } from "~/components/screens/Notificatoin";
import { NotificationDetail } from "~/components/screens/NotificationDetail";
import { defaultTheme } from "~/styles";

export type NotificationStackParamList = {
  List: undefined;
  Detail: { id: number; title: string; createdAt: string };
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
          headerTintColor: defaultTheme.mainColor,
          headerTitleStyle: {
            color: "black",
          },
        }}
      />
    </Stack.Navigator>
  );
});

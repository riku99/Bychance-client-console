import React, { useEffect, useState } from "react";
import { AppState, AppStateStatus } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { shallowEqual, useSelector } from "react-redux";

import { defaultTheme } from "~/styles";
import { HomeStackScreen } from "./Home";
import { PostDataStackScreen } from "./PostData";
import { SettingsStackScreen } from "./Setting";
import { NotificationsStackScreen } from "./Notifications";
import { useGetUnreadNotifications } from "~/hooks/notifications";
import { RootState } from "~/stores";

const Tab = createBottomTabNavigator();

export const Tabs = React.memo(() => {
  const unreadNotificationsNumber = useSelector(
    (state: RootState) => state.notificationsReducer.unread.length
  );
  const { getUnreadNotifications } = useGetUnreadNotifications();

  // 初回起動時にはactiveハンドラは動かないのでこっちで動かす
  useEffect(() => {
    getUnreadNotifications();
  }, []);

  useEffect(() => {
    const onActive = (nextAppState: AppStateStatus) => {
      if (nextAppState === "active") {
        getUnreadNotifications();
      }
    };
    AppState.addEventListener("change", onActive);

    return () => {
      AppState.removeEventListener("change", onActive);
    };
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        inactiveTintColor: defaultTheme.inactiveTabTintColor,
        activeTintColor: defaultTheme.main,
      }}
    >
      <Tab.Screen
        name="setting"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: "設定",
          tabBarIcon: ({ color }) => (
            <Icon name="settings" size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={NotificationsStackScreen}
        options={{
          tabBarLabel: "お知らせ",
          tabBarBadge: unreadNotificationsNumber
            ? unreadNotificationsNumber
            : undefined,
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="posts"
        component={PostDataStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="wysiwyg" size={27} color={color} />
          ),
          tabBarLabel: "投稿データ",
        }}
      />
      <Tab.Screen
        name="home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={27} color={color} />
          ),
          tabBarLabel: "ホーム",
        }}
      />
    </Tab.Navigator>
  );
});

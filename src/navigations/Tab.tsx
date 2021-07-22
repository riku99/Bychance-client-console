import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import { defaultTheme } from "~/styles";
import { HomeStackScreen } from "./Home";
import { PostDataStackScreen } from "./PostData";
import { SettingsStackScreen } from "./Setting";

const Tab = createBottomTabNavigator();

export const Tabs = React.memo(() => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        inactiveTintColor: defaultTheme.inactiveTabTintColor,
        activeTintColor: defaultTheme.mainColor,
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

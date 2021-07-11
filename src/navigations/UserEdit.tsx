import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { UserEdit } from "~/components/screens/UserEdit";

export type UserEditParamList = {
  EditMain: undefined;
  EditItem: {
    setValue: (v: string) => void;
    title: string;
  };
};

const Stack = createStackNavigator<UserEditParamList>();

export const UserEditStackScreen = React.memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EditMain" component={UserEdit} />
    </Stack.Navigator>
  );
});

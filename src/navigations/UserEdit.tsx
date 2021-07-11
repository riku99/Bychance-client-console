import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { UserEdit } from "~/components/screens/UserEdit";
import { EditItem } from "~/components/screens/UserEdit/EditItem";

export type UserEditParamList = {
  EditMain: undefined;
  EditItem: {
    setValue: (v: string) => void;
    title: string;
  };
};

export type UserEidtNavigationProp<T extends keyof UserEditParamList> =
  StackNavigationProp<UserEditParamList, T>;

const Stack = createStackNavigator<UserEditParamList>();

export const UserEditStackScreen = React.memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditMain"
        component={UserEdit}
        options={{ headerTitle: "編集" }}
      />
      <Stack.Screen name="EditItem" component={EditItem} />
    </Stack.Navigator>
  );
});

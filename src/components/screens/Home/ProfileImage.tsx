import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

import { RootState } from "~/stores";

Icon.loadFont();

export const ProfileImage = React.memo(() => {
  const url = useSelector((state: RootState) => state.usersReducer.user?.image);

  return (
    <Avatar
      rounded
      source={url ? { uri: url } : undefined}
      icon={!url ? { name: "user", type: "font-awesome" } : undefined}
      size={60}
      containerStyle={{ backgroundColor: "lightgray" }}
    />
  );
});

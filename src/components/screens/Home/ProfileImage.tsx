import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

import { RootState } from "~/stores";
import { CustomAvatar } from "~/components/utils/CustomAvatar";

Icon.loadFont();

export const ProfileImage = React.memo(() => {
  const url = useSelector((state: RootState) => state.usersReducer.user?.image);

  return <CustomAvatar url={url} />;
});

import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

import { RootState } from "~/stores";
import { CustomAvatar } from "~/components/utils/CustomAvatar";

Icon.loadFont();

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
};

export const ProfileImage = React.memo(({ containerStyle }: Props) => {
  const url = useSelector((state: RootState) => state.usersReducer.user?.image);

  return (
    <View style={containerStyle}>
      <CustomAvatar url={url} />
    </View>
  );
});

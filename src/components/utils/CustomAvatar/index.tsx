import React from "react";
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

Icon.loadFont();

type Props = {
  url?: string | null;
  onPress?: () => void;
};

export const CustomAvatar = React.memo(({ url, onPress }: Props) => {
  return (
    <Avatar
      rounded
      source={url ? { uri: url } : undefined}
      icon={!url ? { name: "user", type: "font-awesome" } : undefined}
      size={60}
      containerStyle={{ backgroundColor: "lightgray" }}
      onPress={onPress ? onPress : undefined}
      activeOpacity={1}
    />
  );
});

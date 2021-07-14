import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {
  onPress?: () => void;
  disabled: boolean;
  uri?: string;
};

export const ImageLayout = React.memo(({ onPress, disabled, uri }: Props) => {
  return (
    <TouchableOpacity
      style={styles.image}
      activeOpacity={1}
      onPress={onPress ? onPress : undefined}
      disabled={disabled}
    >
      {uri ? (
        <Image source={{ uri }} style={{ width: "100%", height: "100%" }} />
      ) : (
        !disabled && <Icon name="image" size={24} color="gray" />
      )}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  image: {
    backgroundColor: "white",
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

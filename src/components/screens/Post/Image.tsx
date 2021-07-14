import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {
  onPress?: () => void;
};

export const Image = React.memo(({ onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.image}
      activeOpacity={1}
      onPress={onPress ? onPress : undefined}
    >
      <Icon name="image" size={24} color="gray" />
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

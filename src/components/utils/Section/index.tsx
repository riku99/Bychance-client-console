import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export const Section = React.memo(({ children, style }: Props) => {
  return <View style={[styles.container, { ...style }]}>{children}</View>;
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
  },
});

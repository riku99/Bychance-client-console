import React from "react";
import { View, StyleSheet } from "react-native";

export const Posts = React.memo(() => {
  return <View style={styles.container}></View>;
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

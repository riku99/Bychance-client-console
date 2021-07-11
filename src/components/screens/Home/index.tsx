import React from "react";
import { View, StyleSheet } from "react-native";

export const Home = React.memo(() => {
  return <View style={styles.container}></View>;
});

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});

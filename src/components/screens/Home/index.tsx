import React from "react";
import { View, StyleSheet } from "react-native";

import { Profile } from "./Profile";

export const Home = React.memo(() => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Profile />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  profileContainer: {
    marginTop: 25,
  },
});

import React from "react";
import { View, StyleSheet } from "react-native";

import { Profile } from "./Profile";
import { CreateButton } from "./CreateButton";

export const Home = React.memo(() => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Profile />
      </View>
      <View style={styles.createButton}>
        <CreateButton />
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
  createButton: {
    position: "absolute",
    right: "10%",
    bottom: "7%",
    height: 55,
    width: 55,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});

import React from "react";
import { View, StyleSheet } from "react-native";

import { ProfileImage } from "./ProfileImage";

export const UserEdit = React.memo(() => {
  return (
    <View style={styles.container}>
      <ProfileImage />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

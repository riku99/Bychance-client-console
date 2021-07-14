import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { Images } from "./Images";

export const Post = React.memo(() => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imagesContainer}>
          <Images />
        </View>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#e3e3e3",
  },
  imagesContainer: {
    marginTop: 25,
    width: "100%",
    // height: 60,
  },
  image: {
    backgroundColor: "white",
    height: 60,
    width: 60,
  },
});

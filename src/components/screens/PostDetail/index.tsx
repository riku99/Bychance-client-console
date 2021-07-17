import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-elements";

import { Images } from "./Images";

export const PostDetail = React.memo(() => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imagesContainer}>
          <Images />
        </View>
        <View style={styles.introContainer}>
          <Text style={styles.title}>
            ラテの美味しいオシャレなカフェでゆったりしませんか??
          </Text>
        </View>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  imagesContainer: {
    height: 250,
    width: "100%",
  },
  introContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
});

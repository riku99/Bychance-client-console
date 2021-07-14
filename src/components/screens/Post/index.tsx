import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { Images } from "./Images";

export const Post = React.memo(() => {
  const [images, setImages] = useState<string[]>([]);
  console.log(images);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imagesContainer}>
          <Images images={images} setImages={setImages} />
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
  },
  image: {
    backgroundColor: "white",
    height: 60,
    width: 60,
  },
});

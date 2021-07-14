import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import { Text } from "react-native-elements";

import { Images } from "./Images";

export const Post = React.memo(() => {
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imagesContainer}>
          <Images images={images} setImages={setImages} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>タイトル</Text>
          <TextInput style={styles.titleInput} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>説明</Text>
          <TextInput style={styles.textInput} multiline={true} />
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
  title: {
    color: "gray",
  },
  titleContainer: {
    marginTop: 30,
  },
  titleInput: {
    marginTop: 10,
    height: 30,
    fontSize: 15,
    backgroundColor: "white",
  },
  textContainer: {
    marginTop: 30,
  },
  textInput: {
    height: 70,
    backgroundColor: "white",
    marginTop: 10,
    textAlignVertical: "top",
  },
});

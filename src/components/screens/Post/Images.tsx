import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {};

export const Images = React.memo(() => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "gray" }}>最低1枚、最大4枚まで選択可能です</Text>
      <View style={styles.images}>
        <TouchableOpacity style={styles.image} activeOpacity={1}>
          <Icon name="image" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image}
          activeOpacity={1}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.image}
          activeOpacity={1}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.image}
          activeOpacity={1}
        ></TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "100%",
  },
  images: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 15,
  },
  image: {
    backgroundColor: "white",
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

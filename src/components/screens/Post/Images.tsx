import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Image } from "./Image";

type Props = {};

export const Images = React.memo(() => {
  const onImagePress = () => {
    launchImageLibrary(
      { mediaType: "photo", quality: 0.8 },
      ({ assets, didCancel }) => {
        if (didCancel) return;
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "gray" }}>最低1枚、最大4枚まで選択可能です</Text>
      <View style={styles.images}>
        <Image onPress={onImagePress} />
        <Image />
        <Image />
        <Image />
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

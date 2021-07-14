import React, { useCallback } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import { Image } from "./Image";

type Props = {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Images = React.memo(({ images, setImages }: Props) => {
  const onImagePress = useCallback(() => {
    launchImageLibrary(
      { mediaType: "photo", quality: 0.8 },
      ({ assets, didCancel }) => {
        if (didCancel) return;

        const uri = assets[0].uri;
        if (uri) {
          setImages((current) => [...current, uri]);
        }
      }
    );
  }, []);

  const showList = useCallback(() => {
    let list = [];
    for (let i = 0; i < 4; i++) {
      list.push(
        <Image onPress={onImagePress} key={i} disabled={i > images.length} />
      );
    }
    return list;
  }, [onImagePress, images.length]);

  return (
    <View style={styles.container}>
      <Text style={{ color: "gray" }}>最低1枚、最大4枚まで選択可能です</Text>
      <View style={styles.images}>{showList()}</View>
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

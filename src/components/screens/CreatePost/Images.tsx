import React, { useCallback } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import { ImageLayout } from "./Image";

type Props = {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Images = React.memo(({ images, setImages }: Props) => {
  const onImagePress = useCallback((index: number) => {
    launchImageLibrary(
      { mediaType: "photo", quality: 0.8 },
      ({ assets, didCancel }) => {
        if (didCancel) return;

        const uri = assets[0].uri;
        if (uri) {
          setImages((uris) => {
            let l = [];
            if (uris[index]) {
              l = uris.map((u, i) => {
                if (i === index) {
                  return uri;
                }

                return u;
              });
            } else {
              l = [...uris, uri];
            }
            return l;
          });
        }
      }
    );
  }, []);

  const showList = useCallback(() => {
    let list = [];
    for (let i = 0; i < 4; i++) {
      list.push(
        <ImageLayout
          onPress={() => onImagePress(i)}
          key={i}
          disabled={i > images.length}
          uri={images[i]}
        />
      );
    }
    return list;
  }, [onImagePress, images]);

  return (
    <View style={styles.container}>
      <Text style={{ color: "gray" }}>最低1枚、最大4枚まで選択可能です</Text>
      <Text style={{ color: "gray" }}>
        画像は3:4(縦:横)の比率に調整されます
      </Text>
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

import React from "react";
import { StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import FastImage from "react-native-fast-image";

type Props = {
  images: string[];
};

export const Images = React.memo(({ images }: Props) => {
  return (
    <Swiper loop={false} activeDotColor="white">
      {images.map((src, i) => (
        <FastImage
          key={i}
          source={{
            uri: src,
          }}
          style={styles.images}
        />
      ))}
    </Swiper>
  );
});

const styles = StyleSheet.create({
  images: {
    width: "100%",
    height: "100%",
  },
});

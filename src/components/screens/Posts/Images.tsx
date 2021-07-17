import React from "react";
import { StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import Swiper from "react-native-swiper";

type Props = {
  images: string[];
};

export const Images = React.memo(({ images }: Props) => {
  return (
    <Swiper loop={false} activeDotColor="white">
      {images.map((url, i) => (
        <FastImage
          key={i}
          style={styles.image}
          source={{
            uri: url,
          }}
        />
      ))}
    </Swiper>
  );
});

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});

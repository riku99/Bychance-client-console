import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import FastImage from "react-native-fast-image";

export const Images = React.memo(() => {
  return (
    <Swiper loop={false} activeDotColor="white">
      <FastImage
        source={{
          uri: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210835488_333746528206564_4270119861468804611_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QbTSkgFSFqQAX8Py7au&edm=AP_V10EBAAAA&ccb=7-4&oh=dcdb8e2c31ece5f19f29449e2a04fb30&oe=60F74D38&_nc_sid=4f375e",
        }}
        style={styles.images}
      />
      <FastImage
        source={{
          uri: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210835488_333746528206564_4270119861468804611_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QbTSkgFSFqQAX8Py7au&edm=AP_V10EBAAAA&ccb=7-4&oh=dcdb8e2c31ece5f19f29449e2a04fb30&oe=60F74D38&_nc_sid=4f375e",
        }}
        style={styles.images}
      />
    </Swiper>
  );
});

const styles = StyleSheet.create({
  images: {
    width: "100%",
    height: "100%",
  },
});

import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from "react-native";
import { Avatar } from "react-native-elements";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { Images } from "./Images";
import { SocialIcons } from "./SoicialIcons";

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
          <View style={styles.imageAndNameContainer}>
            <Avatar
              source={{
                uri: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/218410191_355142425985263_6733373022815732229_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=x1rPnadrd3oAX9KaDsm&edm=AP_V10EBAAAA&ccb=7-4&oh=1648087381dfc97a26a9b3b1e095beca&oe=60F8EF40&_nc_sid=4f375e",
              }}
              rounded
            />
            <Text style={styles.name}>cafe newTokyo</Text>
          </View>
          <Text style={styles.text}>
            浅草駅から徒歩5分の場所にあるカフェです。3ヶ月ほど前にオープンしたばかりなので店内はすごく綺麗です!✨
            {`\n`}
            今大人気の抹茶ラテをアイスで飲むのがおすすめです😆
            {`\n`}
            この画面を表示して頂いた場合ドリンク1杯100円引きになります!
            {`\n`}※ 1回の表示で複数人使うことはできません。1人1回までです。
          </Text>
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.url}>https://reactnative.dev/</Text>
          </TouchableOpacity>
          <View style={styles.socialIcons}>
            <SocialIcons iconWidth={35} iconHeight={35} iconSize={19} />
          </View>
          <Text style={styles.address}>千葉県千葉市幕張1-1</Text>
          <View style={styles.mapContainer}>
            <MapView
              showsUserLocation
              style={{ width: "100%", height: "100%" }}
              provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
              onMapReady={() => {
                Platform.OS === "android"
                  ? PermissionsAndroid.request(
                      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                    )
                  : "";
              }}
            />
          </View>
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
  imageAndNameContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  name: {
    fontSize: 15,
    marginLeft: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  text: {
    marginTop: 20,
  },
  url: {
    marginTop: 15,
    textDecorationLine: "underline",
    color: "#52b1fa",
  },
  socialIcons: {
    marginTop: 18,
    width: 120,
  },
  address: {
    marginTop: 25,
    color: "gray",
  },
  mapContainer: {
    backgroundColor: "gray",
    width: "100%",
    height: 200,
    marginTop: 5,
  },
});

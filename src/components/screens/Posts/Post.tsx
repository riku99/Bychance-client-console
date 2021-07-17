import React from "react";
import { View, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { Text, Avatar } from "react-native-elements";

import { Images } from "./Images";
import { SocialIcons } from "./SocialIcons";

const logo = require("../../../assets/coffee_logo.jpeg");

export const Post = React.memo(() => {
  return (
    <View style={styles.mainSection} onLayout={() => console.log("show")}>
      <Images />
      <TouchableOpacity activeOpacity={1}>
        <View style={styles.introContainer}>
          <Text style={styles.title}>
            ラテの美味しいオシャレなカフェでゆったりしませんか??
          </Text>
          <View style={styles.imageAndNameContainer}>
            <Avatar source={logo} size={40} rounded />
            <Text style={styles.name}>cafe newTokyo</Text>
          </View>
          <Text style={styles.coupon}>※クーポンあり!✨</Text>
          <View style={styles.distanceAndIconContainer}>
            <Text>500m</Text>
            <SocialIcons />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
});

export const itemHeight = Platform.OS === "ios" ? 370 : 390;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  contents: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  mainSection: {
    height: itemHeight,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  introContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  imageAndNameContainer: {
    marginTop: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    marginLeft: 5,
  },
  coupon: {
    fontSize: 14,
    marginTop: 5,
    color: "gray",
  },
  distanceAndIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
  },
});

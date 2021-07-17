import React from "react";
import { View, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { Text, Avatar } from "react-native-elements";

import { Images } from "./Images";
import { SocialIcons } from "./SocialIcons";

export type Item = {
  id: number;
  name: string;
  avatar: string | null;
  title: string;
  text: string;
  images: string[];
  coupon: boolean;
  distance?: number;
  url: string | null;
  instagram: string | null;
  twitter: string | null;
  address: string;
  lat: number;
  lng: number;
};

type Props = {
  item: Item;
  onItemPress: () => void;
};

export const Post = React.memo(({ item, onItemPress }: Props) => {
  return (
    <View style={styles.mainSection}>
      <Images images={item.images} />
      <TouchableOpacity activeOpacity={1} onPress={onItemPress}>
        <View style={styles.introContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.imageAndNameContainer}>
            <Avatar
              source={{ uri: item.avatar ? item.avatar : undefined }}
              size={35}
              rounded
            />
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <Text style={styles.coupon}>{item.coupon && "※クーポンあり!✨"}</Text>
          <View style={styles.distanceAndIconContainer}>
            <Text>{item.distance && item.distance + "m"}</Text>
            <SocialIcons instagram={item.instagram} twitter={item.twitter} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
});

const itemHeight = Platform.OS === "ios" ? 370 : 390;

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
    marginLeft: 9,
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

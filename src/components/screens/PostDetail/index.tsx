import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";

import { Images } from "./Images";
import { SocialIcons } from "./SoicialIcons";
import { Map } from "./Map";

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
  data: Item;
};

export const PostDetail = React.memo(({ data }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.imagesContainer}>
          <Images images={data.images} />
        </View>
        <View style={styles.introContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.imageAndNameContainer}>
            <Avatar
              source={{
                uri: data.avatar ? data.avatar : undefined,
              }}
              rounded
            />
            <Text style={styles.name}>{data.name}</Text>
          </View>
          <Text style={styles.text}>{data.text}</Text>
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.url}>{data.url}</Text>
          </TouchableOpacity>
          <View style={styles.socialIcons}>
            <SocialIcons iconWidth={35} iconHeight={35} iconSize={19} />
          </View>
          <Text style={styles.address}>{data.address}</Text>
          <View style={styles.mapContainer}>
            <Map />
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

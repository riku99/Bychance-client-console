import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { shallowEqual, useSelector } from "react-redux";

import { Section } from "~/components/utils/Section";
import { ProfileImage } from "./ProfileImage";
import { RootState } from "~/stores";

type _Props = {
  title: string;
  value?: string | null;
};

const InfoItems = React.memo(({ title, value }: _Props) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemText}>{value ? value : "未設定"}</Text>
    </View>
  );
});

export const Profile = React.memo(() => {
  const profile = useSelector((state: RootState) => {
    const { name, url, instagram, twitter, address } = state.usersReducer.user!;
    return { name, url, instagram, twitter, address };
  }, shallowEqual);

  return (
    <>
      <Text style={styles.title}>プロフィール</Text>
      <Section
        style={{
          marginTop: 5,
          alignItems: "center",
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        <View style={styles.imageContainer}>
          <ProfileImage />
        </View>
        <Text style={styles.nameContainer}>{profile.name}</Text>
        <View style={{ marginTop: 10 }} />
        <InfoItems title="住所" value={profile.address} />
        <InfoItems title="URL" value={profile.url} />
        <InfoItems title="instagram" value={profile.instagram} />
        <InfoItems title="twitter" value={profile.twitter} />
      </Section>
    </>
  );
});

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 23,
  },
  imageContainer: {},
  nameContainer: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "500",
  },
  infoContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#424242",
  },
  itemText: {
    // marginTop: 10,
  },
});

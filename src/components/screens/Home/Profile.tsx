import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Section } from "~/components/utils/Section";
import { ProfileImage } from "./ProfileImage";
import { RootState } from "~/stores";
import { defaultTheme } from "~/styles";

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
    const { name, url, instagram, twitter, address, enablePushNotification } =
      state.usersReducer.user!;
    return { name, url, instagram, twitter, address, enablePushNotification };
  }, shallowEqual);

  const navigation = useNavigation();

  const onEditPress = () => {
    navigation.navigate("Edit");
  };

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
        <InfoItems
          title="プッシュ通知"
          value={profile.enablePushNotification ? "可" : "不可"}
        />
        <Button
          activeOpacity={1}
          containerStyle={styles.editButtonContainer}
          buttonStyle={styles.editButton}
          title="編集"
          titleStyle={styles.editTitle}
          onPress={onEditPress}
        />
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
  itemText: {},
  editButtonContainer: {
    marginTop: 35,
  },
  editButton: {
    width: 150,
    backgroundColor: "transparent",
    borderColor: defaultTheme.mainColor,
    borderWidth: 1,
  },
  editTitle: {
    fontSize: 13,
    fontWeight: "500",
    color: defaultTheme.mainColor,
  },
});

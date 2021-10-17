import React from "react";
import { View, StyleSheet, Text, StyleProp, ViewStyle } from "react-native";
import { Button } from "react-native-elements";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Section } from "~/components/utils/Section";
import { ProfileImage } from "./ProfileImage";
import { RootState } from "~/stores";
import { defaultTheme } from "~/styles";
import { ProfileItem } from "./ProfileItem";

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
};

export const Profile = React.memo(({ containerStyle }: Props) => {
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
    <View style={containerStyle}>
      <Section
        style={{ height: 390, paddingVertical: 20, alignItems: "center" }}
      >
        <ProfileImage />
        <Text style={styles.name}>{profile.name}</Text>

        <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
          <ProfileItem
            label="住所"
            value={profile.address}
            containerStyle={styles.itemContainer}
          />
          <ProfileItem
            label="URL"
            value={profile.url}
            containerStyle={styles.itemContainer}
          />
          <ProfileItem
            label="instagram"
            value={profile.instagram}
            containerStyle={styles.itemContainer}
          />
          <ProfileItem
            label="twitter"
            value={profile.twitter}
            containerStyle={styles.itemContainer}
          />
          <ProfileItem
            label="プッシュ通知"
            value={profile.enablePushNotification ? "可" : "不可"}
            containerStyle={styles.itemContainer}
          />
        </View>

        <Button
          activeOpacity={1}
          containerStyle={styles.editButtonContainer}
          buttonStyle={styles.editButton}
          title="編集"
          titleStyle={styles.editTitle}
          onPress={onEditPress}
        />
      </Section>
    </View>
  );
});

const styles = StyleSheet.create({
  name: {
    marginTop: 20,
    fontSize: 17,
    fontWeight: "500",
  },
  itemContainer: {
    marginTop: 15,
  },
  editButtonContainer: {
    marginTop: 28,
  },
  editButton: {
    width: "100%",
    paddingVertical: 5,
    backgroundColor: defaultTheme.main,
  },
  editTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

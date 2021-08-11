import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { NotificationsItem } from "~/types";
import { NotificationsNavigationProp } from "~/navigations/Notifications";

type Props = {
  id: number;
  title: string;
  createdAt: string;
};

export const NotificationItem = React.memo(
  ({ id, title, createdAt }: Props) => {
    const navigation = useNavigation<NotificationsNavigationProp<"List">>();

    const onPress = () => {
      navigation.navigate("Detail", {
        id,
        title,
        createdAt,
      });
    };

    return (
      <>
        <View style={styles.item}>
          <Pressable onPress={onPress}>
            <View style={styles.contents}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.timestamp}>{createdAt}</Text>
            </View>
          </Pressable>
        </View>
        <Divider />
      </>
    );
  }
);

const styles = StyleSheet.create({
  item: {
    width: "100%",
    backgroundColor: "white",
  },
  contents: {
    padding: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  timestamp: {
    marginTop: 15,
    color: "gray",
  },
});

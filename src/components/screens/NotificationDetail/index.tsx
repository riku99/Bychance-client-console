import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { useRoute, RouteProp } from "@react-navigation/native";

import { NotificationStackParamList } from "~/navigations/Notifications";

export const NotificationDetail = React.memo(() => {
  const { id, title, createdAt, text } =
    useRoute<RouteProp<NotificationStackParamList, "Detail">>().params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contents}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.timestamp}>{createdAt}</Text>
        <Divider style={styles.divider} />
        <Text style={styles.text}>{text}</Text>
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
  contents: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 20,
  },
  timestamp: {
    color: "gray",
    marginTop: 30,
  },
  divider: {
    marginTop: 10,
  },
  text: {
    marginTop: 30,
    lineHeight: 19,
  },
});

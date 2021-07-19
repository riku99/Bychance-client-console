import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useGetPosts } from "~/hooks/posts";
import { Posts } from "./Posts";

export const Now = React.memo(() => {
  const { data, loading } = useGetPosts("now");

  return (
    <View>
      <Text style={styles.t}>現在ユーザーに表示されている投稿です</Text>
      <Posts data={data} loading={loading} />
    </View>
  );
});

const styles = StyleSheet.create({
  t: {
    backgroundColor: "white",
    marginTop: 3,
    color: "gray",
  },
});

import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { useGetPosts } from "~/hooks/posts";
import { Posts } from "./Posts";

export const Now = React.memo(() => {
  const { data, loading, getData } = useGetPosts("now");

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  }, []);

  return (
    <View>
      <Text style={styles.t}>現在ユーザーに表示されている投稿です</Text>
      <Posts
        data={data}
        loading={loading}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
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

import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

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
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <Text style={styles.t}>現在ユーザーに表示されている投稿です</Text>
      <View style={{ height: 430 }}>
        <Posts
          data={data}
          loading={loading}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>
      {!loading && !!data?.length && (
        <Button title="非表示にする" buttonStyle={styles.button} />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  t: {
    backgroundColor: "white",
    paddingTop: 5,
    color: "gray",
  },
  button: {
    width: "80%",
    alignSelf: "center",
  },
});

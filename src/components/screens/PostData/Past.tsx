import React, { useState, useCallback } from "react";
import { View, Text } from "react-native";

import { useGetPosts } from "~/hooks/posts";
import { Posts } from "./Posts";
import { Blink } from "~/components/utils/Blink";

export const Past = React.memo(() => {
  const { data, loading, getData } = useGetPosts();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  }, []);

  return (
    <>
      <Posts
        data={data}
        loading={loading}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      <Blink
        duration={1200}
        onAnimationEnd={() => console.log("finish!")}
        iterations={2}
        styles={{ position: "absolute" }}
      >
        <Text>引っ張って更新</Text>
      </Blink>
    </>
  );
});

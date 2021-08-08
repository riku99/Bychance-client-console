import React, { useState, useCallback } from "react";

import { useGetPosts } from "~/hooks/posts";
import { Posts } from "./Posts";
import { RefreshBlink } from "./RefreshBlink";

export const Past = React.memo(() => {
  const { data, loading, getData } = useGetPosts();

  const [refreshing, setRefreshing] = useState(false);
  const [blinkVisible, setBlinkVisible] = useState(true);
  const onBlinkEnd = useCallback(() => {
    setBlinkVisible(false);
  }, []);

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
      <RefreshBlink
        isVisible={!loading && !data?.length && blinkVisible}
        onBlinkEnd={onBlinkEnd}
      />
    </>
  );
});

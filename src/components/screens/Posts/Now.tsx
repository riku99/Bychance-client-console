import React from "react";

import { useGetPosts } from "~/hooks/posts";
import { Posts } from "./Posts";

export const Now = React.memo(() => {
  const { data, loading } = useGetPosts("now");

  return <Posts data={data} loading={loading} />;
});

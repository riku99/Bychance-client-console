import React from "react";

import { useGetPosts } from "~/hooks/posts";
import { Posts } from "./Posts";

export const Past = React.memo(() => {
  const { data, loading } = useGetPosts();

  return <Posts data={data} loading={loading} />;
});

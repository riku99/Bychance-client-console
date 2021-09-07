import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { RecommendationDetail } from "bychance-components";
import { useRoute, RouteProp } from "@react-navigation/native";

import { PostsParamList } from "~/navigations/PostData";

export const Detail = React.memo(() => {
  const data = useRoute<RouteProp<PostsParamList, "detail">>();

  useEffect(() => {
    StatusBar.setBarStyle("light-content");

    return () => {
      StatusBar.setBarStyle("default");
    };
  }, []);

  return (
    <View style={styles.container}>
      <RecommendationDetail data={data.params} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
});

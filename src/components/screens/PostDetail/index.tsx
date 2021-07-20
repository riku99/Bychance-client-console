import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { RecommendationDetail } from "bychance-components/src";
import { useRoute, RouteProp } from "@react-navigation/native";

import { PostsParamList } from "~/navigations/Posts";

export const Detail = React.memo(() => {
  const data = useRoute<RouteProp<PostsParamList, "detail">>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <RecommendationDetail data={data.params} />
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
});

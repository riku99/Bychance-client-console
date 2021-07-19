import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { RecommendationList, Recommendation } from "bychance-components";

import { useGetPosts } from "~/hooks/posts";

export const CurrentPosts = React.memo(() => {
  const { data, loading } = useGetPosts("now");
  const listData = useMemo(() => {
    if (data) {
      return data.map((r) => {
        const { id, title, text, images, coupon, client } = r;
        const imagesData = images.map((d) => d.url);

        return {
          id,
          title,
          text,
          images: imagesData,
          coupon,
          name: client.name,
          address: client.address,
          lat: client.lat,
          lng: client.lng,
          instagram: client.instagram,
          twitter: client.twitter,
          url: client.url,
          avatar: client.image,
        };
      });
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>現在表示されている投稿</Text>
      <View>
        {listData && (
          <RecommendationList listData={listData} onItemPress={() => {}} />
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
  },
});

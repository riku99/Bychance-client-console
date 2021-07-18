import React, { useCallback, useMemo } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RecommendationList } from "bychance-components";

import { PostsNavigationProp } from "~/navigations/Posts";
import { useGetPosts } from "~/hooks/posts";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

export const Posts = React.memo(() => {
  const navigation = useNavigation<PostsNavigationProp<"list">>();

  const onItemPress = useCallback(() => {
    navigation.navigate("detail");
  }, []);

  const { data, loading } = useGetPosts();

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

  if (loading) {
    return (
      <ActivityIndicator
        style={{ position: "absolute", alignSelf: "center", top: "50%" }}
      />
    );
  }

  return (
    <View style={styles.container}>
      {listData ? (
        <RecommendationList listData={listData} onItemPress={onItemPress} />
      ) : (
        <Text>データが存在しません</Text>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

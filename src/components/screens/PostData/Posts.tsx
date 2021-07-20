import React, { useCallback } from "react";
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
  RefreshControl,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  RecommendationList,
  Recommendation,
  RecommendationItem,
} from "bychance-components";

import { PostsNavigationProp } from "~/navigations/PostData";

type Props = {
  data?: Recommendation[];
  loading: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
  type?: "now" | "past";
};

export const Posts = React.memo(
  ({ data, loading, refreshing, onRefresh, type = "past" }: Props) => {
    const navigation = useNavigation<PostsNavigationProp<"list">>();

    const onItemPress = useCallback((data: Recommendation) => {
      navigation.navigate("detail", data);
    }, []);

    if (loading) {
      return (
        <ActivityIndicator
          style={{ position: "absolute", alignSelf: "center", top: "50%" }}
        />
      );
    }

    return (
      <View style={styles.container}>
        {data && !!data.length ? (
          type === "now" ? (
            <RecommendationItem
              onItemPress={() => onItemPress(data[0])}
              item={data[0]}
            />
          ) : (
            <RecommendationList
              listData={data}
              onItemPress={onItemPress}
              refreshControl={
                <RefreshControl
                  refreshing={!!refreshing}
                  onRefresh={onRefresh}
                />
              }
            />
          )
        ) : (
          <ScrollView
            style={{ marginTop: 50 }}
            refreshControl={
              <RefreshControl refreshing={!!refreshing} onRefresh={onRefresh} />
            }
          >
            <Text style={{ marginTop: 20 }}>データが存在しません</Text>
          </ScrollView>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
});

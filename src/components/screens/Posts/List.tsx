import React, { useCallback, useRef } from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";

import { Post } from "./Post";

type Recommendation = {
  id: number;
  name: string;
  avatar: string | null;
  title: string;
  text: string;
  images: string[];
  coupon: boolean;
  distance?: number;
  url: string | null;
  instagram: string | null;
  twitter: string | null;
  address: string;
  lat: number;
  lng: number;
};

export const List = React.memo(
  ({ listData }: { listData: Recommendation[]; onItemPress: () => void }) => {
    const flatListRef = useRef<FlatList>(null);

    const renderItem = useCallback(
      ({ item, index }: { item: Recommendation; index: number }) => (
        <View style={{ marginTop: 30 }}>
          <Post key={item.id} />
        </View>
      ),
      []
    );

    return (
      <View style={styles.container}>
        <SafeAreaView>
          <FlatList
            ref={flatListRef}
            data={listData}
            renderItem={renderItem}
            contentContainerStyle={styles.contents}
            scrollEnabled
            initialNumToRender={3}
            windowSize={8}
            maxToRenderPerBatch={4}
          />
        </SafeAreaView>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  contents: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
});

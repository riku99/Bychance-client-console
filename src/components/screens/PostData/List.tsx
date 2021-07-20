import React, { useCallback, useRef } from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";

import { Post, Item } from "./Post";

export const List = React.memo(
  ({
    listData,
    onItemPress,
  }: {
    listData: Item[];
    onItemPress: () => void;
  }) => {
    const flatListRef = useRef<FlatList>(null);

    const renderItem = useCallback(
      ({ item, index }: { item: Item; index: number }) => (
        <View style={{ marginTop: 30 }}>
          <Post key={item.id} item={item} onItemPress={onItemPress} />
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

import React, { useCallback } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { NotificationsItem } from "~/types";

import { NotificationItem } from "./Item";

const _list = [
  {
    id: 1,
    title: "投稿方法が変更されました",
    createdAt: "2021/07/27",
    alreadyRead: false,
  },
  {
    id: 2,
    title: "メンテナンスのお知らせ",
    createdAt: "2021/07/25",
    alreadyRead: true,
  },
];

export const Notifications = React.memo(() => {
  const renderItem = useCallback(
    ({ id, title, createdAt, alreadyRead }: NotificationsItem) => (
      <NotificationItem
        id={id}
        title={title}
        createdAt={createdAt}
        alreadyRead={alreadyRead}
      />
    ),
    []
  );

  const keyExtractor = useCallback((id: number) => id.toString(), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={_list}
        renderItem={({ item }) =>
          renderItem({
            id: item.id,
            title: item.title,
            createdAt: item.createdAt,
            alreadyRead: item.alreadyRead,
          })
        }
        keyExtractor={(item) => keyExtractor(item.id)}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

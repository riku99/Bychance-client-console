import React, { useCallback, useMemo } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { format } from "date-fns";

import { NotificationsItem } from "~/types";
import { NotificationItem } from "./Item";
import { useGetNotificatoins } from "~/hooks/notifications";

export const Notifications = React.memo(() => {
  // カスタムフックからお知らせデータ取得
  const { result, isLoading } = useGetNotificatoins();
  console.log(result);
  const listData = useMemo(
    () =>
      result.map((d) => ({
        ...d,
        createdAt: format(new Date(d.createdAt), "yyyy/MM/dd"),
      })),
    [result]
  );

  const renderItem = useCallback(
    ({
      id,
      title,
      createdAt,
    }: {
      id: number;
      title: string;
      createdAt: string;
    }) => <NotificationItem id={id} title={title} createdAt={createdAt} />,
    []
  );

  const keyExtractor = useCallback((id: number) => id.toString(), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={({ item }) =>
          renderItem({
            id: item.id,
            title: item.title,
            createdAt: item.createdAt,
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

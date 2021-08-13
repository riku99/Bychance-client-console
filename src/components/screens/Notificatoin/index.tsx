import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { format } from "date-fns";

import { NotificationItem } from "./Item";
import {
  useGetNotificatoins,
  useCreateReadNotifications,
} from "~/hooks/notifications";

export const Notifications = React.memo(() => {
  const { result, isLoading, getNotificatoins } = useGetNotificatoins();
  useCreateReadNotifications();
  const listData = useMemo(
    () =>
      result.map((d) => ({
        ...d,
        createdAt: format(new Date(d.createdAt), "yyyy/MM/dd"),
      })),
    [result]
  );
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await getNotificatoins();
    setRefreshing(false);
  };

  const renderItem = useCallback(
    ({
      id,
      title,
      createdAt,
      text,
    }: {
      id: number;
      title: string;
      createdAt: string;
      text: string;
    }) => (
      <NotificationItem
        id={id}
        title={title}
        createdAt={createdAt}
        text={text}
      />
    ),
    []
  );

  const keyExtractor = useCallback((id: number) => id.toString(), []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={({ item }) =>
          renderItem({
            id: item.id,
            title: item.title,
            createdAt: item.createdAt,
            text: item.text,
          })
        }
        keyExtractor={(item) => keyExtractor(item.id)}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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

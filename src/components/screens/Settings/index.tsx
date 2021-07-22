import React, { useMemo } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { ListItem } from "react-native-elements";

import { useLogout } from "~/hooks/auth";

export const Settings = React.memo(() => {
  const { logout } = useLogout();

  const list = useMemo(() => {
    return [
      {
        title: "ログアウト",
        onPress: () => {
          logout();
        },
        style: { color: "red" },
      },
    ];
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.style}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  contents: {
    marginTop: 20,
  },
});

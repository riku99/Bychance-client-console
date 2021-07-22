import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

export const Settings = React.memo(() => {
  const list = useMemo(() => {
    return [
      {
        title: "ログアウト",
        color: "red",
        style: { color: "red" },
      },
    ];
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider>
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

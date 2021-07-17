import React, { useCallback, useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";

import { List } from "./List";

export const Posts = React.memo(() => {
  return <List />;
});

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

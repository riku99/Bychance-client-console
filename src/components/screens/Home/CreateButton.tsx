import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import { defaultTheme } from "~/styles";

type Props = {};

export const CreateButton = React.memo(() => {
  return (
    <Button
      containerStyle={styles.container}
      buttonStyle={styles.button}
      activeOpacity={1}
      raised
      icon={{ name: "add", color: "white" }}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 50,
  },
  button: {
    height: "100%",
    borderRadius: 50,
    backgroundColor: defaultTheme.mainColor,
  },
});

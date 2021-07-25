import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export const TokenButton = React.memo(() => {
  return (
    <Button
      buttonStyle={styles.buttonContainer}
      title="トークン発行"
      titleStyle={{ fontSize: 15, fontWeight: "bold" }}
    />
  );
});

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: "100%",
  },
});

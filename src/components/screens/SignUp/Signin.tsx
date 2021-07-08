import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import { EmailForm } from "~/components/utils/EmailForm";

export const Signin = React.memo(() => {
  return (
    <View style={styles.container}>
      <View style={styles.section}></View>
      <Button
        title="送信"
        titleStyle={styles.buttonTitle}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  section: {
    width: "100%",
    height: "30%",
    backgroundColor: "white",
    marginTop: 40,
  },
  buttonTitle: {
    fontWeight: "500",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 40,
  },
});

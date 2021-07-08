import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";

type Props = {
  setEnabledSignup: (v: boolean) => void;
};

export const InputSignupToken = React.memo(({ setEnabledSignup }: Props) => {
  return (
    <>
      <Input
        label="サインアップのための暗号を入力してください"
        containerStyle={styles.inputContainer}
      />
      <Button
        title="送信"
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        activeOpacity={1}
      />
    </>
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: "50%",
  },
  buttonContainer: {
    marginTop: 40,
    width: "80%",
  },
  buttonTitle: {
    fontWeight: "500",
  },
});

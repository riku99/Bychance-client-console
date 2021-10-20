import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";

import { PasswordForm } from "~/components/utils/PasswordForm";
import { Section } from "~/components/utils/Section";
import { defaultTheme } from "~/styles";
import { useUpdatePassword } from "~/hooks/password";

export const PasswordUpadte = () => {
  const [password, setPassword] = useState("");
  const { updatePassword } = useUpdatePassword();
  const onSendButtonPress = () => {
    if (password.length >= 8) {
      Alert.alert("更新しますか?", "", [
        {
          text: "更新",
          style: "destructive",
          onPress: () => {
            updatePassword(password);
          },
        },
        {
          text: "キャンセル",
        },
      ]);
    }
  };

  return (
    <View>
      <Section style={styles.input}>
        <PasswordForm input={password} setInputText={setPassword} />
      </Section>
      <Button
        title="更新する"
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.button}
        disabled={password.length < 8}
        onPress={onSendButtonPress}
        activeOpacity={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    alignSelf: "center",
    marginTop: 120,
  },
  buttonContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
  },
  buttonTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    backgroundColor: defaultTheme.main,
  },
});

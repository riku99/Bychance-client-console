import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

import { EmailForm } from "~/components/utils/EmailForm";
import { PasswordForm } from "~/components/utils/PasswordForm";

export const Signup = React.memo(() => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.formContainer}>
            <EmailForm />
          </View>
          <View style={styles.formContainer}>
            <PasswordForm />
          </View>
          <View style={styles.formContainer}>
            <Input
              placeholder="名前"
              leftIcon={<Icon name="account-box" size={20} color="gray" />}
            />
          </View>
        </View>
        <Button
          title="登録する"
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonContainer}
        />
      </View>
    </TouchableWithoutFeedback>
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
    backgroundColor: "white",
    marginTop: 40,
    alignItems: "center",
    padding: 5,
  },
  buttonTitle: {
    fontWeight: "500",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 40,
  },
  formContainer: {
    height: 60,
    width: "100%",
  },
});

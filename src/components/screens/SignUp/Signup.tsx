import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "react-native-elements";

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
          <View style={[styles.formContainer, { marginTop: "10%" }]}>
            <PasswordForm />
          </View>
        </View>
        <Button
          title="送信"
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
    height: "35%",
    backgroundColor: "white",
    marginTop: 40,
    alignItems: "center",
  },
  buttonTitle: {
    fontWeight: "500",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 40,
  },
  formContainer: {
    width: "95%",
    height: 30,
    marginTop: "10%",
  },
});

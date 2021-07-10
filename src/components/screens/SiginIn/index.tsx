import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import { EmailForm } from "~/components/utils/EmailForm";
import { PasswordForm } from "~/components/utils/PasswordForm";

export const Signin = React.memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.formContainer}>
          <EmailForm input={email} setInputText={setEmail} />
        </View>
        <View style={styles.formContainer}>
          <PasswordForm input={password} setInputText={setPassword} />
        </View>
      </View>
      <Button
        title="ログイン"
        titleStyle={styles.buttonTitle}
        containerStyle={styles.buttonContainer}
        disabled={!email || !password || password.length < 8}
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
    backgroundColor: "white",
    marginTop: 40,
    alignItems: "center",
    padding: 5,
  },
  formContainer: {
    height: 80,
    width: "100%",
  },
  buttonTitle: {
    fontWeight: "500",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 40,
  },
});

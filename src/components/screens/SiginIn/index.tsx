import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import { EmailForm } from "~/components/utils/EmailForm";
import { PasswordForm } from "~/components/utils/PasswordForm";
import { useSignin } from "~/hooks/auth";
import { ToastLoading } from "~/components/utils/ToastLoading";
import { defaultTheme } from "~/styles";

export const Signin = React.memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signin, isLoading } = useSignin();

  const onLoginButtonPress = () => {
    signin(email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <EmailForm input={email} setInputText={setEmail} />
        <PasswordForm input={password} setInputText={setPassword} />
        <Button
          title="ログイン"
          disabled={!email || !password || password.length < 8}
          onPress={onLoginButtonPress}
          activeOpacity={1}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
      {isLoading && <ToastLoading />}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    width: "90%",
    alignSelf: "center",
    height: 300,
    borderRadius: 20,
    backgroundColor: "white",
    marginTop: 40,
    padding: 15,
  },
  buttonTitle: {
    fontWeight: "500",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 50,
    alignSelf: "center",
  },
  button: {
    backgroundColor: defaultTheme.main,
    paddingVertical: 5,
  },
});

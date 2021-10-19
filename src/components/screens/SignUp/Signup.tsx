import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "react-native-elements";

import { EmailForm } from "~/components/utils/EmailForm";
import { PasswordForm } from "~/components/utils/PasswordForm";
import { useSignup } from "~/hooks/auth";
import { ToastLoading } from "~/components/utils/ToastLoading";
import { defaultTheme } from "~/styles";

export const Signup = React.memo(() => {
  const { createUser, isLoading } = useSignup();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegisterButtonPress = () => {
    createUser(email, password);
  };

  const error = useMemo(() => {
    if (!email || !password || password.length < 8) {
      return true;
    } else {
      return false;
    }
  }, [email, password]);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.section}>
          <EmailForm setInputText={setEmail} input={email} />
          <PasswordForm setInputText={setPassword} input={password} />
          <Button
            title="登録"
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
            onPress={onRegisterButtonPress}
            disabled={error}
            buttonStyle={styles.button}
            activeOpacity={1}
          />
        </View>
      </TouchableWithoutFeedback>
      {isLoading && <ToastLoading />}
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  section: {
    width: "90%",
    alignSelf: "center",
    height: 260,
    borderRadius: 20,
    backgroundColor: "white",
    marginTop: 40,
    padding: 15,
  },
  buttonTitle: {
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "80%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: defaultTheme.main,
    paddingVertical: 5,
    marginTop: 40,
  },
});

import React, { useMemo, useState } from "react";
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
import { useSignup } from "~/hooks/auth";
import { ToastLoading } from "~/components/utils/ToastLoading";
import { defaultTheme } from "~/styles";

export const Signup = React.memo(() => {
  const { createUser, isLoading } = useSignup();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onRegisterButtonPress = () => {
    createUser(email, password, name);
  };

  const error = useMemo(() => {
    if (!email || !password || password.length < 8 || !name) {
      return true;
    } else {
      return false;
    }
  }, [email, password, name]);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.section}>
          <EmailForm setInputText={setEmail} input={email} />
          <PasswordForm setInputText={setPassword} input={password} />
          <Input
            placeholder="名前"
            leftIcon={
              <Icon
                name="account-box"
                size={20}
                color={defaultTheme.formInput}
              />
            }
            placeholderTextColor={defaultTheme.formInput}
            inputContainerStyle={{ borderBottomColor: defaultTheme.formInput }}
            onChangeText={setName}
            containerStyle={{ marginTop: 10 }}
          />
          <Button
            title="登録する"
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
            onPress={onRegisterButtonPress}
            disabled={error}
            buttonStyle={styles.button}
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
    height: 330,
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
  },
});

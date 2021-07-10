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
import { useCreateUser } from "~/hooks/users";

export const Signup = React.memo(() => {
  const { createFirebaseUser } = useCreateUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onRegisterButtonPress = () => {
    createFirebaseUser(email, password, name);
  };

  const error = useMemo(() => {
    if (!email || !password || password.length < 8 || !name) {
      return true;
    } else {
      return false;
    }
  }, [email, password, name]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.formContainer}>
            <EmailForm setInputText={setEmail} input={email} />
          </View>
          <View style={styles.formContainer}>
            <PasswordForm setInputText={setPassword} input={password} />
          </View>
          <View style={styles.formContainer}>
            <Input
              placeholder="名前"
              leftIcon={<Icon name="account-box" size={20} color="gray" />}
              onChangeText={setName}
              errorMessage={!name ? "入力してください" : undefined}
            />
          </View>
        </View>
        <Button
          title="登録する"
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonContainer}
          onPress={onRegisterButtonPress}
          disabled={error}
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
    height: 70,
    width: "100%",
  },
});

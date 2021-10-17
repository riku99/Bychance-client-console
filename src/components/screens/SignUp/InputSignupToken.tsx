import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  TextInput,
} from "react-native";
import { Button, Text } from "react-native-elements";
import { useToast } from "react-native-fast-toast";

import { useSignupToken } from "~/hooks/signupToken";
import { ToastLoading } from "~/components/utils/ToastLoading";
import { defaultTheme } from "~/styles";
import { ToSignin } from "./ToSignin";

type Props = {
  setEnabledSignup: (v: boolean) => void;
};

export const InputSignupToken = React.memo(({ setEnabledSignup }: Props) => {
  const [input, setInput] = useState("");

  const toast = useToast();

  const { verifySignupToken, isLoading } = useSignupToken();

  const onSendButtonPress = async () => {
    const result = await verifySignupToken(input);

    if (result) {
      toast.show("確認しました", { type: "success" });
      setEnabledSignup(true);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.text}>
              登録のためのトークンを入力してください
            </Text>
            <TextInput style={styles.input} onChangeText={(t) => setInput(t)} />
            <Button
              title="送信"
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
              titleStyle={styles.buttonTitle}
              activeOpacity={1}
              onPress={onSendButtonPress}
              disabled={!input}
            />
            <ToSignin containerStyle={styles.toSiginIn} />
          </View>
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
  },
  content: {
    height: 260,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 14,
    alignSelf: "center",
    marginTop: 80,
    width: "90%",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "gray",
  },
  input: {
    width: "100%",
    height: 30,
    marginTop: 30,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: "#e8e8e8",
  },
  buttonTitle: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: defaultTheme.main,
    paddingVertical: 2,
  },
  buttonContainer: {
    width: 75,
    marginTop: 30,
    alignSelf: "center",
  },
  toSiginIn: {
    marginTop: 58,
  },
});

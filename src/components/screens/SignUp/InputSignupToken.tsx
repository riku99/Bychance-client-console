import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";

import { useSignupToken } from "~/hooks/signupToken";

type Props = {
  setEnabledSignup: (v: boolean) => void;
};

export const InputSignupToken = React.memo(({ setEnabledSignup }: Props) => {
  const [input, setInput] = useState("");

  const { verifySignupToken } = useSignupToken();

  const onSend = async () => {
    await verifySignupToken(input);
  };

  return (
    <>
      <Input
        label="サインアップのための暗号を入力してください"
        containerStyle={styles.inputContainer}
        onChangeText={(t) => setInput(t)}
        errorMessage={!input ? "入力してください" : undefined}
      />
      <Button
        title="送信"
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        activeOpacity={1}
        onPress={onSend}
        disabled={!input}
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

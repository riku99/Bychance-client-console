import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { useToast } from "react-native-fast-toast";

import { useSignupToken } from "~/hooks/signupToken";

type Props = {
  setEnabledSignup: (v: boolean) => void;
};

export const InputSignupToken = React.memo(({ setEnabledSignup }: Props) => {
  const [input, setInput] = useState("");

  const toast = useToast();

  const { verifySignupToken } = useSignupToken();

  const onSend = async () => {
    const result = await verifySignupToken(input);
    setEnabledSignup(true);
    if (result) {
      toast.show("確認しました", { type: "success" });
      // setEnabledSignup(true);
    }
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

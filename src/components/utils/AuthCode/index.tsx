import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Button } from "react-native-elements";
import { defaultTheme } from "~/styles";

type Props = {
  onSendButtonPress: (str: string) => void;
};

export const AuthCode = ({ onSendButtonPress }: Props) => {
  const [code, setCode] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.desc}>
        メールアドレスに送信された
        {"\n"}
        4桁の認証コードを入力してください
      </Text>
      <TextInput style={styles.input} onChangeText={(t) => setCode(t)} />
      <Button
        title="送信"
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        activeOpacity={1}
        onPress={() => {
          onSendButtonPress(code);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  desc: {
    marginTop: 130,
    alignSelf: "center",
  },
  input: {
    height: 40,
    backgroundColor: "white",
    marginTop: 30,
    width: "75%",
    alignSelf: "center",
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 35,
  },
  button: {
    width: "65%",
    alignSelf: "center",
    paddingVertical: 5,
    backgroundColor: defaultTheme.main,
  },
  buttonTitle: {
    fontWeight: "bold",
  },
});

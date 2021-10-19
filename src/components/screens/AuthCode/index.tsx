import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Button } from "react-native-elements";
import { defaultTheme } from "~/styles";

export const AuthCode = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>
        メールアドレスに送信された
        {"\n"}
        認証コードを入力してください
      </Text>
      <TextInput style={styles.input} />
      <Button
        title="送信"
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        activeOpacity={1}
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

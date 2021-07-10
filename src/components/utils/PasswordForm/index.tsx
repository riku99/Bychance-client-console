import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

Icon.loadFont();

type Props = {
  input: string;
  setInputText: (t: string) => void;
};

export const PasswordForm = React.memo(({ setInputText, input }: Props) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="パスワード"
        leftIcon={<Icon name="lock" size={20} color="gray" />}
        secureTextEntry={true}
        onChangeText={setInputText}
        errorMessage={
          !input
            ? "入力してください"
            : input.length < 8
            ? "8文字以上にしてください"
            : undefined
        }
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

import { defaultTheme } from "~/styles";

Icon.loadFont();

type Props = {
  input: string;
  setInputText: (t: string) => void;
};

export const EmailForm = React.memo(({ setInputText, input }: Props) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="メールアドレス"
        leftIcon={
          <Icon name="email" size={20} color={defaultTheme.formInput} />
        }
        placeholderTextColor={defaultTheme.formInput}
        onChangeText={setInputText}
        inputContainerStyle={{ borderBottomColor: defaultTheme.formInput }}
        // errorMessage={!input ? "入力してください" : undefined}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

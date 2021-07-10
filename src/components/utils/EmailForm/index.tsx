import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

Icon.loadFont();

type Props = {
  setInputText: (t: string) => void;
};

export const EmailForm = React.memo(({ setInputText }: Props) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="メールアドレス"
        leftIcon={<Icon name="email" size={20} color="gray" />}
        onChangeText={setInputText}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

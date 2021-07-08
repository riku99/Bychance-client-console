import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

Icon.loadFont();

export const PasswordForm = React.memo(() => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="パスワード"
        leftIcon={<Icon name="lock" size={20} color="gray" />}
        secureTextEntry={true}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

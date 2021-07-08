import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

Icon.loadFont();

export const EmailForm = React.memo(() => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="メールアドレス"
        leftIcon={<Icon name="email" size={20} color="gray" />}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

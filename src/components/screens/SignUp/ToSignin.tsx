import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { defaultTheme } from "~/styles";

export const ToSignin = React.memo(() => {
  const navigation = useNavigation();

  const onLoginPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>既に登録済みの方</Text>
      <TouchableOpacity activeOpacity={1}>
        <Text style={styles.link} onPress={onLoginPress}>
          ログイン
        </Text>
      </TouchableOpacity>
    </View>
  );
});

const fontSize = 17;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize,
  },
  link: {
    fontSize,
    color: defaultTheme.linkColor,
    textDecorationLine: "underline",
  },
});

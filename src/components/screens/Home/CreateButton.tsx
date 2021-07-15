import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { defaultTheme } from "~/styles";
import { MainNavigationProp } from "~/navigations/Main";

export const CreateButton = React.memo(() => {
  const navigation = useNavigation<MainNavigationProp<"Tab">>();

  const onPress = () => {
    navigation.navigate("Post");
  };

  return (
    <Button
      containerStyle={styles.container}
      buttonStyle={styles.button}
      activeOpacity={1}
      raised
      icon={{ name: "add", color: "white" }}
      onPress={onPress}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 50,
  },
  button: {
    height: "100%",
    borderRadius: 50,
    backgroundColor: defaultTheme.mainColor,
  },
});

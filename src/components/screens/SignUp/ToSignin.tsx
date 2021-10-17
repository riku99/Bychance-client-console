import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ViewStyle,
  StyleProp,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { defaultTheme } from "~/styles";

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
};

export const ToSignin = React.memo(({ containerStyle }: Props) => {
  const navigation = useNavigation();

  const onLoginPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>既に登録済みの方</Text>
    //   <TouchableOpacity activeOpacity={1}>
    //     <Text style={styles.link} onPress={onLoginPress}>
    //       ログイン
    //     </Text>
    //   </TouchableOpacity>
    // </View>
    <View style={containerStyle}>
      <View style={styles.content}>
        <Text>既に登録済みの方</Text>
        <Pressable onPress={onLoginPress}>
          <Text style={styles.link}>ログイン</Text>
        </Pressable>
      </View>
    </View>
  );
});

const fontSize = 17;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  link: {
    color: defaultTheme.linkColor,
    textDecorationLine: "underline",
  },
});

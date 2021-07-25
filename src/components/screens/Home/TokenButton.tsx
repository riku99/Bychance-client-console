import React, { useState } from "react";
import { StyleSheet, Alert, Text, View } from "react-native";
import { Button } from "react-native-elements";

import { defaultTheme } from "~/styles";
import { useCreateSignupToken } from "~/hooks/signupToken";

export const TokenButton = React.memo(() => {
  const { isLoading, create } = useCreateSignupToken();
  const [token, setToken] = useState("");

  const onPress = async () => {
    Alert.alert("作成しますか?", "", [
      {
        text: "作成",
        onPress: async () => {
          const result = await create();
          if (result) {
            setToken(result);
          }
          console.log(result);
        },
      },
      {
        text: "キャンセル",
      },
    ]);
  };

  if (token) {
    return (
      <View>
        <Text>{token}</Text>
        <Button
          title="OK"
          titleStyle={{ fontSize: 14 }}
          containerStyle={{ width: 50, marginTop: 20, height: 35 }}
          activeOpacity={1}
          onPress={() => setToken("")}
        />
      </View>
    );
  }

  return (
    <>
      {!isLoading ? (
        <Button
          buttonStyle={styles.button}
          title="トークン発行"
          titleStyle={{ fontSize: 15, fontWeight: "bold" }}
          onPress={onPress}
          activeOpacity={1}
        />
      ) : (
        <Text>発行中</Text>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "100%",
    backgroundColor: defaultTheme.mainColor,
  },
});

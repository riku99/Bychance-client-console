import React from "react";
import { StyleSheet, Alert, Text } from "react-native";
import { Button } from "react-native-elements";

import { defaultTheme } from "~/styles";
import { useCreateSignupToken } from "~/hooks/signupToken";

export const TokenButton = React.memo(() => {
  const { isLoading, create } = useCreateSignupToken();

  const onPress = async () => {
    Alert.alert("作成しますか?", "", [
      {
        text: "作成",
        style: "destructive",
        onPress: async () => {
          const result = await create();
          console.log(result);
        },
      },
      {
        text: "キャンセル",
      },
    ]);
  };

  return (
    <>
      {!isLoading ? (
        <Button
          buttonStyle={styles.button}
          title="トークン発行"
          titleStyle={{ fontSize: 15, fontWeight: "bold" }}
          onPress={onPress}
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

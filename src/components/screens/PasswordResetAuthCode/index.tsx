import React from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthCode } from "~/components/utils/AuthCode";
import { useVerifyAuthCodeForPasswordReset } from "~/hooks/password";

export const PasswordResetAuthCode = () => {
  const navigation = useNavigation();
  const { verifyAuthCodeForPasswordReset } =
    useVerifyAuthCodeForPasswordReset();
  const onSendButtonPress = async (input: string) => {
    let code: number;
    if ((code = Number(input))) {
      const result = await verifyAuthCodeForPasswordReset({ code });
      if (result) {
        navigation.navigate("PasswordUpdate");
      }
    } else {
      Alert.alert("コードが間違っています");
    }
  };

  return <AuthCode onSendButtonPress={onSendButtonPress} />;
};

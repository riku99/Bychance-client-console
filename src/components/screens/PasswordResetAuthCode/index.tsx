import React from "react";
import { Alert } from "react-native";

import { AuthCode } from "~/components/utils/AuthCode";
import { useVerifyAuthCodeForPasswordReset } from "~/hooks/password";

export const PasswordResetAuthCode = () => {
  const { verifyAuthCodeForPasswordReset } =
    useVerifyAuthCodeForPasswordReset();
  const onSendButtonPress = async (input: string) => {
    let code: number;
    if ((code = Number(input))) {
      const result = await verifyAuthCodeForPasswordReset({ code });
      if (result) {
        console.log("success!");
      }
    } else {
      Alert.alert("コードが間違っています");
    }
  };

  return <AuthCode onSendButtonPress={onSendButtonPress} />;
};

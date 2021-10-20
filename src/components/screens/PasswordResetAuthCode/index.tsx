import React from "react";
import {} from "react-native";

import { AuthCode } from "~/components/utils/AuthCode";

export const PasswordResetAuthCode = () => {
  const onSendButtonPress = (input: string) => {
    console.log("ok");
  };

  return <AuthCode onSendButtonPress={onSendButtonPress} />;
};

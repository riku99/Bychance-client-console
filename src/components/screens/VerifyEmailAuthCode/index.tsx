import React from "react";

import { useVerifyEmail } from "~/hooks/auth";

import { AuthCode } from "~/components/utils/AuthCode";

export const VerifyEmailAuthCode = () => {
  const { verifyEmailWithAuthCode, isLoading } = useVerifyEmail();

  const onSendButtonPress = async (str: string) => {
    if (str && Number(str)) {
      await verifyEmailWithAuthCode({ code: Number(str) });
    }
  };

  return <AuthCode onSendButtonPress={onSendButtonPress} />;
};

import { useCallback } from "react";
import { default as axios } from "axios";
import { Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import { useToast } from "react-native-fast-toast";

import { useApikit } from "./apikit";
import { baseUrl } from "~/constants";

export const usePasswordResetCode = () => {
  const { addBearer, getIdToken, handleError } = useApikit();

  const createAuthCodeForPasswordReset = useCallback(async () => {
    try {
      const idToken = await getIdToken();

      await axios.post(
        `${baseUrl}/client_auth_code/password_reset`,
        {},
        addBearer(idToken)
      );

      return true;
    } catch (e) {
      handleError(e);
    }
  }, []);

  return {
    createAuthCodeForPasswordReset,
  };
};

export const useVerifyAuthCodeForPasswordReset = () => {
  const { addBearer, getIdToken, handleError } = useApikit();

  const verifyAuthCodeForPasswordReset = async ({ code }: { code: number }) => {
    try {
      const idToken = await getIdToken();
      await axios.get(
        `${baseUrl}/client_auth_code/password_reset?code=${code}`,
        addBearer(idToken)
      );

      return true;
    } catch (e) {
      handleError(e);
    }
  };

  return {
    verifyAuthCodeForPasswordReset,
  };
};

export const useSendPasswordResetLink = () => {
  const sendLink = useCallback(async () => {
    const user = auth().currentUser;
    if (!user?.email) {
      Alert.alert("エラーが発生しました");
      return;
    }
    await auth().sendPasswordResetEmail(user.email);
  }, []);

  return {
    sendLink,
  };
};

import { useCallback } from "react";
import { Alert } from "react-native";
import auth from "@react-native-firebase/auth";

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

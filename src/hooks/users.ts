import { useCallback } from "react";
import auth from "@react-native-firebase/auth";
import { useToast } from "react-native-fast-toast";

export const useCreateUser = () => {
  const toast = useToast();

  const createFirebaseUser = useCallback(
    async (email: string, password: string) => {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
      } catch (error) {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          toast.show("メールアドレスは既に使用されています", {
            type: "danger",
          });
          return;
        }

        if (error.code === "auth/invalid-email") {
          toast.show("無効なアドレスです", { type: "danger" });
          return;
        }

        toast.show("何らかのエラーが発生しました", { type: "danger" });
      }
    },
    []
  );

  return {
    createFirebaseUser,
  };
};

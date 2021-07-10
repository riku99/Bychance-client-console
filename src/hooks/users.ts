import { useCallback } from "react";
import auth from "@react-native-firebase/auth";
import { useToast } from "react-native-fast-toast";
import { default as axios } from "axios";

import { baseUrl } from "~/constants";
import { addBearer } from "~/helpers/api";
import { useHandleApiErrors } from "./errors";

export const useCreateUser = () => {
  const toast = useToast();

  const { handleError } = useHandleApiErrors();

  const createFirebaseUser = useCallback(
    async (email: string, password: string, name: string) => {
      let idToken: string;

      try {
        const { user: firebaseUser } =
          await auth().createUserWithEmailAndPassword(email, password);
        idToken = await firebaseUser.getIdToken();
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

        if (error.code === "auth/weak-password") {
          toast.show("パスワードは8文字以上にしてください");
          return;
        }

        toast.show("何らかのエラーが発生しました", { type: "danger" });
      }

      try {
        const result = await axios.post(
          `${baseUrl}/recommendationClients`,
          { name },
          addBearer(idToken!)
        );
        console.log(result);
      } catch (e) {
        handleError(e);
      }
    },
    []
  );

  return {
    createFirebaseUser,
  };
};

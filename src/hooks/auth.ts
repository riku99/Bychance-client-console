import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useToast } from "react-native-fast-toast";
import { default as axios } from "axios";

import { useCustomDispatch } from "./stores";
import { setLogin } from "~/stores/sessions";
import { baseUrl } from "~/constants";
import { addBearer } from "~/helpers/api";
import { useHandleApiErrors } from "./errors";
import { setUser, User } from "~/stores/users";

export const useAuthSubscribe = () => {
  const [initializing, setInitializing] = useState(true);
  const dispatch = useCustomDispatch();

  const onAuthStateChanged = useCallback(
    async (user: FirebaseAuthTypes.User | null) => {
      console.log(user);
      if (user) {
        // firebaseへの登録が完了したらここ実行される
        const token = await user.getIdToken();
        console.log(token);
        //dispatch(setLogin(true)); // firbaseに登録完了しただけでなく、取得したtokenをサーバ側で検証してユーザー作成も完了したらtrueにしたい
      }
      if (initializing) setInitializing(false);
    },
    []
  );

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);

    return unsubscribe;
  }, []);

  return {
    initializing,
  };
};

export const useSessionLogin = () => {
  const { handleError } = useHandleApiErrors();
  const dispatch = useCustomDispatch();

  useEffect(() => {
    const get = async () => {
      const user = auth().currentUser;
      if (user) {
        const idToken = await user.getIdToken();
        try {
          const result = await axios.get<User>(
            `${baseUrl}/recommendationClient`,
            addBearer(idToken)
          );
          dispatch(setUser(result.data));
          dispatch(setLogin(true));
        } catch (e) {
          handleError(e);
        }
      }
    };
    get();
  }, []);
};

export const useSignup = () => {
  const toast = useToast();

  const { handleError } = useHandleApiErrors();

  const dispatch = useCustomDispatch();

  const createUser = useCallback(
    async (email: string, password: string, name: string) => {
      try {
        const { user: firebaseUser } =
          await auth().createUserWithEmailAndPassword(email, password);
        const idToken = await firebaseUser.getIdToken();

        try {
          const result = await axios.post<{ id: string; name: string }>(
            `${baseUrl}/recommendationClients`,
            { name },
            addBearer(idToken)
          );

          dispatch(setUser(result.data));
          dispatch(setLogin(true));
        } catch (e) {
          handleError(e);
        }
      } catch (error) {
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
    },
    []
  );

  return {
    createUser,
  };
};

export const useSignin = () => {
  const { handleError } = useHandleApiErrors();

  const dispatch = useCustomDispatch();

  const signin = useCallback(async (email: string, password: string) => {
    try {
      const { user: firebaseUser } = await auth().signInWithEmailAndPassword(
        email,
        password
      );

      const idToken = await firebaseUser.getIdToken();

      try {
        const result = await axios.get<User>(
          `${baseUrl}/recommendationClient`,
          addBearer(idToken)
        );

        dispatch(setUser(result.data));
        dispatch(setLogin(true));
      } catch (e) {
        handleError(e);
      }
    } catch (e) {
      Alert.alert("エラー", "メールアドレスまたはパスワードが間違っています");
    }
  }, []);

  return {
    signin,
  };
};

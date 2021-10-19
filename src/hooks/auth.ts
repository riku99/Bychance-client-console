import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import { useToast } from "react-native-fast-toast";
import { default as axios } from "axios";
import { useNavigation } from "@react-navigation/native";

import { useCustomDispatch } from "./stores";
import { setLogin } from "~/stores/sessions";
import { baseUrl } from "~/constants";
import { addBearer } from "~/helpers/api";
import { useHandleApiErrors } from "./errors";
import { setUser } from "~/stores/users";
import { useApikit } from "./apikit";
import { GetUserResponse } from "~/types/api/users";

export const useSessionLogin = () => {
  const { handleError } = useHandleApiErrors();
  const dispatch = useCustomDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      const user = auth().currentUser;
      if (user) {
        const idToken = await user.getIdToken();
        try {
          const result = await axios.get<GetUserResponse>(
            `${baseUrl}/recommendationClient`,
            addBearer(idToken)
          );
          dispatch(setUser(result.data));
          dispatch(setLogin(true));
        } catch (e) {
          handleError(e);
        }
      }
      setIsLoading(false);
    };
    get();
  }, []);

  return { isLoading };
};

export const useSignup = () => {
  const toast = useToast();
  const { handleError } = useHandleApiErrors();
  const dispatch = useCustomDispatch();
  const navigation = useNavigation();
  const [isLoading, setIsloading] = useState(false);

  const createUser = useCallback(async (email: string, password: string) => {
    setIsloading(true);

    try {
      const { user: firebaseUser } =
        await auth().createUserWithEmailAndPassword(email, password);
      const idToken = await firebaseUser.getIdToken();
      try {
        const result = await axios.post<{ id: string; name: string }>(
          `${baseUrl}/recommendationClients`,
          {},
          addBearer(idToken)
        );
        setIsloading(false);
        dispatch(setUser(result.data));
        navigation.navigate("AuthCode");
        // dispatch(setLogin(true)); ログインは認証コードの検証が終わった後なのでここではしない
      } catch (e) {
        handleError(e);
        setIsloading(false);
      }
    } catch (error) {
      setIsloading(false);
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
  }, []);

  return {
    createUser,
    isLoading,
  };
};

export const useSignin = () => {
  const { handleError } = useHandleApiErrors();

  const dispatch = useCustomDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const signin = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user: firebaseUser } = await auth().signInWithEmailAndPassword(
        email,
        password
      );

      const idToken = await firebaseUser.getIdToken();

      try {
        const result = await axios.get<GetUserResponse>(
          `${baseUrl}/recommendationClient`,
          addBearer(idToken)
        );

        setIsLoading(false);
        dispatch(setUser(result.data));
        dispatch(setLogin(true));
      } catch (e) {
        handleError(e);
      } finally {
        setIsLoading(false);
      }
    } catch (e) {
      Alert.alert("エラー", "メールアドレスまたはパスワードが間違っています");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    signin,
    isLoading,
  };
};

export const useIdToken = () => {
  const getIdToken = useCallback(async () => {
    const user = auth().currentUser;

    if (!user) return;

    const idToken = await user.getIdToken();

    return idToken;
  }, []);

  return {
    getIdToken,
  };
};

export const useLogout = () => {
  const { toast, dispatch } = useApikit();
  const [isLoading, setIsloading] = useState(false);

  const logout = useCallback(() => {
    Alert.alert(
      "ログアウトしますか?",
      "表示中の投稿がある場合はそのまま表示され続けます",
      [
        {
          text: "ログアウト",
          style: "destructive",
          onPress: async () => {
            setIsloading(true);
            try {
              await auth().signOut();

              setIsloading(false);
              dispatch(setLogin(false));
              dispatch(setUser(undefined));
            } catch (e) {
              toast.show("何らかのエラーが発生しました", { type: "danger" });
              setIsloading(false);
            }
          },
        },
        {
          text: "キャンセル",
        },
      ]
    );
  }, []);

  return {
    logout,
    isLoading,
  };
};

export const useVerifyEmail = () => {
  const dispatch = useCustomDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { toast, getIdToken, handleError } = useApikit();

  const verifyEmailWithAuthCode = useCallback(
    async ({ code }: { code: number }) => {
      try {
        const idToken = await getIdToken();
        await axios.patch(
          `${baseUrl}/recommendation_clients/verified_email`,
          { code },
          addBearer(idToken)
        );

        dispatch(setLogin(true));
        toast.show("認証しました", { type: "success" });
      } catch (e) {
        handleError(e);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    verifyEmailWithAuthCode,
    isLoading,
  };
};

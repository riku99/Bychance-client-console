import { useCallback, useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { useCustomDispatch } from "./stores";
import { setLogin } from "~/stores/sessions";

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

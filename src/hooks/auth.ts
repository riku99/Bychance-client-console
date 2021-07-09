import { useCallback, useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { useCustomDispatch } from "./stores";
import { setLogin } from "~/stores/sessions";

export const useAuthSubscribe = () => {
  const [initializing, setInitializing] = useState(true);
  const dispatch = useCustomDispatch();

  const onAuthStateChanged = useCallback(
    (user: FirebaseAuthTypes.User | null) => {
      console.log(user);
      if (user) {
        dispatch(setLogin(true));
      }
      if (initializing) setInitializing(false);
    },
    []
  );

  useEffect(() => {
    const unsbscribe = auth().onAuthStateChanged(onAuthStateChanged);

    return unsbscribe;
  }, []);

  return {
    initializing,
  };
};

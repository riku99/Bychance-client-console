import React from "react";
import { Text, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "~/stores";

import { MainStackScreen } from "~/navigations/Main";
import { AuthStackScreen } from "~/navigations/Auth";
import { useHandleErrors } from "~/hooks/errors";
import { useSessionLogin } from "~/hooks/auth";

export const Root = React.memo(() => {
  const login = useSelector((state: RootState) => state.sessionsReducer.login);

  useHandleErrors();

  useSessionLogin();

  // loadingの際のsplashscreen

  return <>{login ? <MainStackScreen /> : <AuthStackScreen />}</>;
});

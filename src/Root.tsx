import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/stores";
import Icon from "react-native-vector-icons/FontAwesome";
import MIcon from "react-native-vector-icons/MaterialIcons";

import { MainStackScreen } from "~/navigations/Main";
import { AuthStackScreen } from "~/navigations/Auth";
import { useHandleErrors } from "~/hooks/errors";
import { useSessionLogin } from "~/hooks/auth";

Icon.loadFont();
MIcon.loadFont();

export const Root = React.memo(() => {
  const login = useSelector((state: RootState) => state.sessionsReducer.login);

  useHandleErrors();

  const { isLoading } = useSessionLogin();

  // loadingの際のsplashscreen
  if (isLoading) return null;

  return <>{login ? <MainStackScreen /> : <AuthStackScreen />}</>;
});

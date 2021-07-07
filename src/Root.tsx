import React from "react";
import { Text, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "~/stores";

export const Root = React.memo(() => {
  const login = useSelector((state: RootState) => state.sessionsReducer.login);

  return (
    <SafeAreaView>
      <Text>ok</Text>
    </SafeAreaView>
  );
});

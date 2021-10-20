import React, { useMemo } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { useLogout } from "~/hooks/auth";
import { ToastLoading } from "~/components/utils/ToastLoading";
import { useDeleteUser } from "~/hooks/users";
import { usePasswordResetCode } from "~/hooks/password";

export const Settings = React.memo(() => {
  const { logout, isLoading } = useLogout();
  const { _delete, isLoading: deleteLoading } = useDeleteUser();
  const { createAuthCodeForPasswordReset } = usePasswordResetCode();
  const navigation = useNavigation();

  const list = useMemo(() => {
    return [
      {
        title: "パスワード変更",
        onPress: () => {
          Alert.alert(
            "パスワードを変更しますか?",
            "「はい」を押すと変更のための認証コードが登録したメールアドレスに送信されます。",
            [
              {
                text: "はい",
                onPress: async () => {
                  const result = await createAuthCodeForPasswordReset();
                  if (result) {
                    navigation.navigate("passwordResetAuthCode");
                  }
                },
              },
              {
                text: "キャンセル",
              },
            ]
          );
        },
      },
      {
        title: "ログアウト",
        onPress: () => {
          logout();
        },
        style: { color: "red" },
      },
      {
        title: "アカウント削除",
        onPress: _delete,
        style: { color: "red" },
      },
    ];
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.style}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
      {(isLoading || deleteLoading) && <ToastLoading />}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  contents: {
    marginTop: 20,
  },
});

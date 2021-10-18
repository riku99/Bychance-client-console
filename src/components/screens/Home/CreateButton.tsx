import React from "react";
import { StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { defaultTheme } from "~/styles";
import { MainNavigationProp } from "~/navigations/Main";
import { RootState } from "~/stores";

type Props = {
  setModalVisible: (b: boolean) => void;
};

export const CreateButton = React.memo(({ setModalVisible }: Props) => {
  const navigation = useNavigation<MainNavigationProp<"Tab">>();

  const name = useSelector((state: RootState) => state.usersReducer.user?.name);
  const address = useSelector(
    (state: RootState) => state.usersReducer.user?.address
  );
  const position = useSelector((state: RootState) => {
    const { lat, lng } = state.usersReducer.user!;
    return lat && lng;
  });
  const showedModal = useSelector(
    (state: RootState) => state.usersReducer.user?.showedPostModal
  );

  const onPress = () => {
    if (!showedModal) {
      setModalVisible(true);
    }
    if (!name || !address || !position) {
      Alert.alert("名前、住所が未設定です", "名前、住所を設定してください");
      return;
    }
    navigation.navigate("Post");
  };

  return (
    <Button
      containerStyle={styles.container}
      buttonStyle={styles.button}
      activeOpacity={1}
      raised
      icon={{ name: "add", color: "white" }}
      onPress={onPress}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 50,
  },
  button: {
    height: "100%",
    borderRadius: 50,
    backgroundColor: defaultTheme.main,
  },
});

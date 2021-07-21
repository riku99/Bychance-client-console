import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Modal from "react-native-modal";

import { defaultTheme } from "~/styles";
import { useChangeShowedPostModal } from "~/hooks/users";

type Props = {
  modalVisible: boolean;
  setModalVisible: (b: boolean) => void;
};

export const CrateAlertModal = React.memo(
  ({ modalVisible, setModalVisible }: Props) => {
    const { change } = useChangeShowedPostModal();

    const onCloseButtonPress = () => {
      setModalVisible(false);
      change();
    };

    return (
      <Modal isVisible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.contennts}>
            <Text style={styles.modalTitle}>※ 投稿に関する注意</Text>
            <Text style={styles.modalText}>
              同時に表示できる投稿は1件のみです。既に表示中ものがある場合は
              タブの「投稿データ」から非表示にして新しく投稿してください。{"\n"}
              この注意は今後表示されません。
            </Text>
            <Pressable style={styles.closeButton} onPress={onCloseButtonPress}>
              <Text style={styles.closeButtonTitle}>閉じる</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contennts: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 16,
    color: "gray",
  },
  modalText: {
    marginTop: 5,
  },
  closeButton: {
    marginTop: 20,
    alignSelf: "flex-end",
  },
  closeButtonTitle: {
    color: defaultTheme.mainColor,
    fontWeight: "bold",
  },
});

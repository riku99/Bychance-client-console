import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Modal from "react-native-modal";

import { defaultTheme } from "~/styles";

type Props = {
  isVisible: boolean;
  setIsVisible: (b: boolean) => void;
  children: Element;
};

export const CustomModal = React.memo(
  ({ isVisible, setIsVisible, children }: Props) => {
    const close = () => {
      setIsVisible(false);
    };
    return (
      <Modal
        isVisible={isVisible}
        swipeDirection="down"
        onSwipeComplete={close}
      >
        <View style={styles.container}>
          <>
            {children}
            <Pressable style={styles.buttonContainer} onPress={close}>
              <Text style={styles.buttonTitle}>閉じる</Text>
            </Pressable>
          </>
        </View>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contents: {
    backgroundColor: "white",
    padding: 15,
  },
  buttonContainer: {
    alignSelf: "flex-end",
    transform: [{ translateY: -20 }, { translateX: -20 }],
  },
  buttonTitle: {
    color: defaultTheme.mainColor,
    fontWeight: "bold",
  },
});

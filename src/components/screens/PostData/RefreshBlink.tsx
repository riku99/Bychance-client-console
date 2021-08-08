import React from "react";
import { StyleSheet, Text } from "react-native";
import { Blink } from "~/components/utils/Blink";

type Props = {
  isVisible: boolean;
  onBlinkEnd: () => void;
};

export const RefreshBlink = React.memo(({ isVisible, onBlinkEnd }: Props) => {
  return (
    <Blink
      duration={1000}
      onAnimationEnd={onBlinkEnd}
      iterations={2}
      styles={styles.contents}
      isVisible={isVisible}
    >
      <Text style={styles.text}>引っ張って更新</Text>
      <Text style={[styles.text, styles.arrow]}>↓</Text>
    </Blink>
  );
});

const styles = StyleSheet.create({
  contents: {
    position: "absolute",
    top: "42%",
    alignSelf: "center",
  },
  text: {
    color: "#bdbdbd",
    fontSize: 19,
    fontWeight: "bold",
  },
  arrow: {
    alignSelf: "center",
    marginTop: 3,
  },
});

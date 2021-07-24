import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { CustomModal } from "~/components//utils/CustomModal";

type Props = {
  isVisible: boolean;
  setIsVisible: (b: boolean) => void;
};

export const CouponDesc = React.memo(({ isVisible, setIsVisible }: Props) => (
  <CustomModal isVisible={isVisible} setIsVisible={setIsVisible}>
    <View style={styles.contents}></View>
  </CustomModal>
));

const styles = StyleSheet.create({
  contents: {
    backgroundColor: "white",
    width: "90%",
    height: 200,
  },
});

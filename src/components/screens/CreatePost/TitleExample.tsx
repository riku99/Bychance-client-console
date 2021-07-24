import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { CustomModal } from "~/components/utils/CustomModal";

type Props = {
  isVisible: boolean;
  setIsVisible: (b: boolean) => void;
};

export const TitleExample = React.memo(({ isVisible, setIsVisible }: Props) => (
  <CustomModal isVisible={isVisible} setIsVisible={setIsVisible}>
    <View style={styles.contents}>
      <Text style={styles.text}>
        ラテのおいしいカフェでまったりしませんか??
      </Text>
      <Text />
      <Text style={styles.text}>ランチには野菜たっぷりのパスタで決まり!!</Text>
      <Text />
      <Text style={styles.text}>
        お洒落でリーズナブルな古着がそろっています!
      </Text>
      <Text />
      <Text>など、呼びかけや提案する感じのタイトルがオススメです!</Text>
    </View>
  </CustomModal>
));

const styles = StyleSheet.create({
  contents: {
    backgroundColor: "white",
    width: "90%",
    height: 180,
    padding: 10,
  },
  text: {
    fontWeight: "bold",
  },
});

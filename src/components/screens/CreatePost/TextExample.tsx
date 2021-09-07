import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { CustomModal } from "~/components//utils/CustomModal";

type Props = {
  isVisible: boolean;
  setIsVisible: (b: boolean) => void;
};

export const TextExample = React.memo(({ isVisible, setIsVisible }: Props) => (
  <CustomModal isVisible={isVisible} setIsVisible={setIsVisible}>
    <View style={styles.contents}>
      <Text>
        最近できた美味しいラテが自慢のカフェです!
        {"\n"}
        最近暑いのでアイスで飲んでいかれる方が多いです☺️
        {"\n"}
        当店のオススメは抹茶ラテのアイスとオリジナルドーナッツの組み合わせです!!
        {"\n"}
        ぜひ立ち寄ってみてください😊
        {"\n"}
        この画面を表示していただいた場合お一人様100円引きさせて頂きます。
        {"\n"}
        なお、お1人様1回限りとさせていただきます。
        {"\n"}
        {"\n"}
        <Text style={{ color: "blue" }}>#カフェ #おしゃれ #ラテ #ランチ</Text>
      </Text>
    </View>
  </CustomModal>
));

const styles = StyleSheet.create({
  contents: {
    width: "90%",
    height: 280,
    backgroundColor: "white",
    padding: 10,
  },
});

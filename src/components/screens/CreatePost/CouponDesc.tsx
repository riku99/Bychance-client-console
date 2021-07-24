import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { CustomModal } from "~/components//utils/CustomModal";

type Props = {
  isVisible: boolean;
  setIsVisible: (b: boolean) => void;
};

export const CouponDesc = React.memo(({ isVisible, setIsVisible }: Props) => (
  <CustomModal isVisible={isVisible} setIsVisible={setIsVisible}>
    <View style={styles.contents}>
      <Text>
        この投稿をクーポンとして使えるようにする場合「あり」にしてください。
        <Text style={{ fontWeight: "bold" }}>✨クーポンあり✨</Text>
        が表示されてユーザーがクーポンの存在を一目でわかるようになります。
        {"\n"}
        {"\n"}
        「この投稿をクーポンとして使えるようにする場合」とは例えば本文に
        {"\n"}
        {"\n"}
        <Text style={{ fontWeight: "bold" }}>
          この画面を表示していただいた場合お一人様100円引きさせて頂きます。なお、お1人様1回限りとさせていただきます。
        </Text>
        {"\n"}
        {"\n"}
        のような文を入れてクーポンとして使えるようにする場合を指します。
      </Text>
    </View>
  </CustomModal>
));

const styles = StyleSheet.create({
  contents: {
    backgroundColor: "white",
    width: "90%",
    height: 280,
    padding: 10,
  },
});

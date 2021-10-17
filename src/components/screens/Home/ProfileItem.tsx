import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle, Text } from "react-native";

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  label: string;
  value?: string | null;
};

export const ProfileItem = ({ containerStyle, label, value }: Props) => {
  return (
    <View style={[{ width: "72%" }, containerStyle]}>
      <View style={styles.item}>
        <Text>{label}</Text>
        <Text>{value ?? "未設定"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

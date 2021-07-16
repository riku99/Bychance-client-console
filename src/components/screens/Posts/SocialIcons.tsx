import React from "react";
import { View, StyleSheet } from "react-native";
import { SocialIcon } from "react-native-elements";

export const SocialIcons = React.memo(() => {
  return (
    <View style={styles.icons}>
      <SocialIcon
        type="instagram"
        style={{ width: 30, height: 30, backgroundColor: "pink" }}
        iconSize={17}
        underlayColor="pink"
      />
      <SocialIcon
        type="twitter"
        style={{ width: 30, height: 30 }}
        iconSize={17}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
  },
});

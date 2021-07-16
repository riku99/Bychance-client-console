import React from "react";
import { View, StyleSheet, Alert, Linking } from "react-native";
import { SocialIcon } from "react-native-elements";

const notSupportedAlert = () => {
  Alert.alert("無効なURLです", "");
};

export const SocialIcons = React.memo(() => {
  const onPress = async () => {
    try {
      const supported = await Linking.canOpenURL(
        "https://www.instagram.com/rik0999/"
      );

      if (supported) {
        await Linking.openURL("https://www.instagram.com/rik0999/");
      } else {
        notSupportedAlert();
      }
    } catch (e) {
      notSupportedAlert();
    }
  };

  return (
    <View style={styles.icons}>
      <SocialIcon
        type="instagram"
        style={{ width: 30, height: 30, backgroundColor: "pink" }}
        iconSize={17}
        underlayColor="pink"
        onPress={onPress}
      />
      <SocialIcon
        type="twitter"
        style={{ width: 30, height: 30 }}
        iconSize={17}
        onPress={onPress}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
  },
});

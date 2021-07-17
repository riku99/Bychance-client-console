import React from "react";
import { View, StyleSheet, Alert, Linking } from "react-native";
import { SocialIcon } from "react-native-elements";

type Props = {
  // instagram: string | null;
  // twitter: string | null;
  iconWidth?: number;
  iconHeight?: number;
  iconSize?: number;
};

const notSupportedAlert = () => {
  Alert.alert("無効なURLです", "");
};

export const SocialIcons = React.memo(
  ({ iconWidth = 30, iconHeight = 30, iconSize = 17 }: Props) => {
    const onPress = async (link: string) => {
      try {
        const supported = await Linking.canOpenURL(link);

        if (supported) {
          await Linking.openURL(link);
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
          style={{
            width: iconWidth,
            height: iconHeight,
            backgroundColor: "pink",
          }}
          iconSize={iconSize}
          underlayColor="pink"
          // onPress={() => onPress(instagram)}
        />
        <SocialIcon
          type="twitter"
          style={{ width: iconWidth, height: iconHeight }}
          iconSize={iconSize}
          // onPress={() => onPress(twitter)}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 44,
  },
});

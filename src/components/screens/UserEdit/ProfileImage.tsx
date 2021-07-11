import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { launchImageLibrary } from "react-native-image-picker";

import { RootState } from "~/stores";
import { CustomAvatar } from "~/components/utils/CustomAvatar";

type Props = {
  imageUri: string;
  setImageUri: (s: string) => void;
};

export const ProfileImage = React.memo(({ imageUri, setImageUri }: Props) => {
  const url = useSelector((state: RootState) => state.usersReducer.user!.image);

  const onPress = useCallback(() => {
    launchImageLibrary({ mediaType: "photo" }, ({ assets, didCancel }) => {
      if (didCancel) return;

      if (assets[0].uri) {
        setImageUri(assets[0].uri);
      }
    });
  }, []);

  return <CustomAvatar url={imageUri ? imageUri : url} onPress={onPress} />;
});

import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { launchImageLibrary } from "react-native-image-picker";

import { RootState } from "~/stores";
import { CustomAvatar } from "~/components/utils/CustomAvatar";

export const ProfileImage = React.memo(() => {
  const url = useSelector((state: RootState) => state.usersReducer.user!.image);

  const [imageUrl, setImageUrl] = useState(url);

  const onPress = useCallback(() => {
    launchImageLibrary({ mediaType: "photo" }, ({ assets, didCancel }) => {
      if (didCancel) return;

      console.log(assets[0].uri);
      setImageUrl(assets[0].uri);
    });
  }, []);

  return <CustomAvatar url={imageUrl} onPress={onPress} />;
});

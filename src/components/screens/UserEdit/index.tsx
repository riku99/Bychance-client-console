import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

import { ProfileImage } from "./ProfileImage";
import { Section } from "~/components/utils/Section";
import { RootState } from "~/stores";
import { defaultTheme } from "~/styles";
import { useEditUser } from "~/hooks/users";
import { UserEidtNavigationProp } from "~/navigations/UserEdit";
import { ToastLoading } from "~/components/utils/ToastLoading";

type _Props = {
  style?: ViewStyle;
  title: string;
  value?: string | null;
  setValue: (v: string) => void;
};
const EidtItem = React.memo(({ style, title, value, setValue }: _Props) => {
  const onAddressPress = () => {
    if (title === "住所") {
      console.log("address");
    }
  };

  const navigation = useNavigation<UserEidtNavigationProp<"EditMain">>();

  const onPress = () => {
    navigation.navigate("EditItem", {
      title,
      setValue,
      value,
    });
  };

  return (
    <View style={styles.EditItem}>
      <Text style={styles.EditItemTitle}>{title}</Text>
      <TouchableOpacity
        style={styles.EditItemInput}
        activeOpacity={1}
        onPress={onPress}
      >
        <Text>{value}</Text>
      </TouchableOpacity>
    </View>
  );
});

export const UserEdit = React.memo(() => {
  const navigation = useNavigation();

  const { editUser, isLoading } = useEditUser();

  const [imageUri, setImageUri] = useState("");

  const user = useSelector(
    (state: RootState) => state.usersReducer.user!,
    shallowEqual
  );

  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [url, setUrl] = useState(user.url);
  const [instagram, setInstagram] = useState(user.instagram);
  const [twitter, setTwitter] = useState(user.twitter);

  const onCompButtonPress = useCallback(async () => {
    await editUser({
      name,
      address,
      image: imageUri,
      instagram,
      twitter,
      url,
    });
    navigation.goBack();
  }, [name, address, url, instagram, twitter, imageUri]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="完了"
          buttonStyle={{ backgroundColor: "transparent" }}
          titleStyle={{ color: defaultTheme.mainColor, fontWeight: "500" }}
          activeOpacity={1}
          onPress={onCompButtonPress}
        />
      ),
    });
  }, [onCompButtonPress]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Section style={styles.section}>
          <ProfileImage imageUri={imageUri} setImageUri={setImageUri} />
          <View style={styles.EditItemsContaner}>
            <EidtItem title="名前" value={name} key="名前" setValue={setName} />
            <EidtItem
              title="住所"
              value={address}
              key="住所"
              setValue={setAddress}
            />
            <EidtItem title="URL" value={url} key="URL" setValue={setUrl} />
            <EidtItem
              title="instagram"
              value={instagram}
              key="instagram"
              setValue={setInstagram}
            />
            <EidtItem
              title="twitter"
              value={twitter}
              key="twitter"
              setValue={setTwitter}
            />
          </View>
        </Section>
        {isLoading && <ToastLoading />}
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  section: {
    marginTop: 15,
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  EditItemsContaner: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  EditItem: {
    flexDirection: "row",
    width: "80%",
    marginTop: 20,
  },
  EditItemTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#424242",
    width: 50,
  },
  EditItemInput: {
    marginLeft: 40,
    fontSize: 15,
    width: "70%",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
});

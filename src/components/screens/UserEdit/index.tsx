import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { shallowEqual, useSelector } from "react-redux";

import { ProfileImage } from "./ProfileImage";
import { Section } from "~/components/utils/Section";
import { RootState } from "~/stores";

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

  return (
    <View style={styles.EditItem}>
      <Text style={styles.EditItemTitle}>{title}</Text>
      <TextInput
        defaultValue={value ? value : undefined}
        style={styles.EditItemInput}
        editable={title === "住所" ? false : true}
        onPressOut={onAddressPress}
        onChangeText={setValue}
      />
    </View>
  );
});

export const UserEdit = React.memo(() => {
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
    marginTop: 30,
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

import React, { useState } from "react";
import { View, StyleSheet, ViewStyle, TextInput, Text } from "react-native";

import { ProfileImage } from "./ProfileImage";
import { Section } from "~/components/utils/Section";

type _Props = {
  style?: ViewStyle;
  title: string;
  value?: string | null;
};
const EidtItem = React.memo(({ style, title, value }: _Props) => {
  return (
    <View style={styles.EditItem}>
      <Text style={styles.EditItemTitle}>{title}</Text>
      <TextInput
        defaultValue={value ? value : undefined}
        style={styles.EditItemInput}
      />
    </View>
  );
});

export const UserEdit = React.memo(() => {
  const [imageUri, setImageUri] = useState("");

  return (
    <View style={styles.container}>
      <Section style={styles.section}>
        <ProfileImage imageUri={imageUri} setImageUri={setImageUri} />
        <View style={styles.EditItemsContaner}>
          <EidtItem title="名前" value="riku" key="名前" />
          <EidtItem title="住所" key="住所" />
          <EidtItem title="URL" key="URL" />
          <EidtItem title="instagram" key="instagram" />
          <EidtItem title="twitter" key="twitter" />
        </View>
      </Section>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  section: {
    marginTop: 5,
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
    width: "70%",
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
    width: "80%",

    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
});

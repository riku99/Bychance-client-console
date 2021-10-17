import React, { useLayoutEffect, useMemo, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native-elements";

import { UserEditParamList } from "~/navigations/UserEdit";
import { MapForAddress } from "./MapForAddress";
import { defaultTheme } from "~/styles";

export const EditItem = React.memo(() => {
  const route = useRoute<RouteProp<UserEditParamList, "EditItem">>();
  const navigation = useNavigation();

  const { title, setValue, setPosition, value } = route.params;

  const [input, setInput] = useState(value);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [title]);

  const onPress = () => {
    setValue(input ? input : "");
    navigation.goBack();
  };

  const notes = useMemo(
    () => title === "instagram" || title === "twitter",
    [title]
  );

  return (
    <View style={styles.container}>
      {title !== "住所" ? (
        <>
          {notes && (
            <Text style={styles.note}>
              {title === "instagram"
                ? "ユーザーネームを入力してください"
                : "ユーザー名を入力してください (@はいらないです)"}
            </Text>
          )}
          <TextInput
            style={[styles.input, { marginTop: notes ? 20 : 40 }]}
            defaultValue={value ? value : undefined}
            onChangeText={setInput}
          />
        </>
      ) : (
        <View style={styles.mapContainer}>
          <MapForAddress setValue={setInput} setPosition={setPosition} />
        </View>
      )}
      <Button
        containerStyle={styles.buttonContainer}
        title="保存"
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.button}
        onPress={onPress}
        activeOpacity={1}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  note: {
    marginTop: 20,
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    fontSize: 17,
  },
  buttonContainer: {
    marginTop: 35,
    width: "50%",
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: "500",
  },
  button: {
    backgroundColor: defaultTheme.main,
  },
  mapContainer: {
    width: "100%",
    height: "60%",
  },
});

import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

import { UserEditParamList } from "~/navigations/UserEdit";
import { MapForAddress } from "./MapForAddress";

export const EditItem = React.memo(() => {
  const route = useRoute<RouteProp<UserEditParamList, "EditItem">>();
  const navigation = useNavigation();

  const { title, setValue, value } = route.params;

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

  return (
    <View style={styles.container}>
      {title !== "住所" ? (
        <>
          <TextInput
            style={styles.input}
            defaultValue={value ? value : undefined}
            onChangeText={setInput}
          />
        </>
      ) : (
        <View style={styles.mapContainer}>
          <MapForAddress setValue={setInput} />
        </View>
      )}
      <Button
        containerStyle={styles.buttonContainer}
        title="保存"
        titleStyle={styles.buttonTitle}
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
  input: {
    width: "80%",
    marginTop: 30,
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
  mapContainer: {
    width: "100%",
    height: "60%",
  },
});

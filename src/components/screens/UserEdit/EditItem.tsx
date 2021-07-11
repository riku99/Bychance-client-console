import React, { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";

import { UserEditParamList } from "~/navigations/UserEdit";

export const EditItem = React.memo(() => {
  const route = useRoute<RouteProp<UserEditParamList, "EditItem">>();
  const navigation = useNavigation();

  console.log(route);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [route.params.title]);

  return <View></View>;
});

const styles = StyleSheet.create({});

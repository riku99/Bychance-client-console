import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Button } from "react-native-elements";

import { useGetPosts, useHidePost } from "~/hooks/posts";
import { Posts } from "./Posts";
import { defaultTheme } from "~/styles";
import { ToastLoading } from "~/components/utils/ToastLoading";
import { Blink } from "~/components/utils/Blink";

export const Now = React.memo(() => {
  const { data, loading, getData, setData } = useGetPosts("now");

  const [refreshing, setRefreshing] = useState(false);
  const [blinkVisible, setBlinkVisible] = useState(true);
  const onBlinkEnd = useCallback(() => {
    setBlinkVisible(false);
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  }, []);

  const { hidePost, loading: hideLoading } = useHidePost();

  const onHideButtonPress = async (id: number) => {
    Alert.alert(
      "この投稿を非表示にしますか?",
      "ユーザーにこの投稿が表示されなくなります。再度表示させることはできません",
      [
        {
          text: "非表示にする",
          style: "destructive",
          onPress: async () => {
            const result = await hidePost({ id });
            if (result) {
              setData((c) => {
                if (c) {
                  return c.filter((data) => data.id !== result);
                }
              });
            }
          },
        },
        {
          text: "キャンセル",
        },
      ]
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        paddingHorizontal: 10,
      }}
    >
      <Text style={styles.t}>現在ユーザーに表示されている投稿です</Text>
      <ScrollView
        contentContainerStyle={{ marginTop: 20, paddingBottom: 30 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Posts data={data} loading={loading} type="now" />
        {!loading && !!data?.length && (
          <Button
            title="非表示にする"
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            activeOpacity={1}
            onPress={() => onHideButtonPress(data[0].id)}
          />
        )}
      </ScrollView>
      {!loading && !data?.length && (
        <Blink
          duration={1000}
          onAnimationEnd={onBlinkEnd}
          iterations={2}
          styles={{ position: "absolute", top: "42%", alignSelf: "center" }}
          isVisible={blinkVisible}
        >
          <Text
            style={{
              color: "#bdbdbd",
              fontSize: 19,
              fontWeight: "bold",
            }}
          >
            引っ張って更新
          </Text>
          <Text
            style={{
              color: "#bdbdbd",
              fontSize: 19,
              fontWeight: "bold",
              alignSelf: "center",
              marginTop: 3,
            }}
          >
            ↓
          </Text>
        </Blink>
      )}
      {hideLoading && <ToastLoading />}
    </View>
  );
});

const styles = StyleSheet.create({
  t: {
    backgroundColor: "white",
    paddingTop: 5,
    color: "gray",
  },
  button: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: defaultTheme.mainColor,
    marginTop: 20,
  },
  buttonTitle: {
    fontWeight: "bold",
  },
});

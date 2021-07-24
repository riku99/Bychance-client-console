import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Text, Button } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Images } from "./Images";
import { defaultTheme } from "~/styles";
import { useCreatePost } from "~/hooks/posts";
import { ToastLoading } from "~/components/utils/ToastLoading";
import { TitleExample } from "./TitleExample";

Icon.loadFont();

export const Post = React.memo(() => {
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [coupon, setCoupon] = useState(false);
  const [endTime, setEndTime] = useState<Date>();

  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [titleExVisible, setTitleExVisible] = useState(false);

  const { createPost, loading } = useCreatePost();

  const onPostButtonPress = async () => {
    await createPost({ title, text, coupon, endTime, images });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imagesContainer}>
          <Images images={images} setImages={setImages} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            タイトル{"    "}
            <Pressable onPress={() => setTitleExVisible(true)}>
              <Text style={styles.exapmleTitle}>タイトルの例</Text>
            </Pressable>
          </Text>
          {title.length > 35 && (
            <Text style={{ color: "red", marginTop: 5 }}>
              35文字以下で入力してください
            </Text>
          )}
          <TextInput
            style={styles.titleInput}
            onChangeText={(t) => setTitle(t)}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            本文{"    "}
            <Pressable onPress={() => console.log("ok")}>
              <Text style={styles.exapmleTitle}>本文の例</Text>
            </Pressable>
          </Text>
          <TextInput
            style={styles.textInput}
            multiline={true}
            onChangeText={(t) => setText(t)}
          />
        </View>
        <View style={styles.couponContainer}>
          <Text style={styles.title}>
            クーポンの有無　{"  "}
            <Pressable onPress={() => console.log("ok")}>
              <Text style={styles.exapmleTitle}>クーポンの有無とは?</Text>
            </Pressable>
          </Text>
          <View style={styles.couponSelect}>
            <Button
              title="あり"
              titleStyle={[
                styles.couponTitle,
                { color: coupon ? "white" : "black" },
              ]}
              activeOpacity={1}
              onPress={() => setCoupon(true)}
              buttonStyle={[
                styles.couponButton,
                {
                  backgroundColor: coupon ? subColor : undefined,
                },
              ]}
            />
            <Button
              title="なし"
              titleStyle={[
                styles.couponTitle,
                { color: coupon ? "black" : "white" },
              ]}
              activeOpacity={1}
              onPress={() => setCoupon(false)}
              buttonStyle={[
                styles.couponButton,
                {
                  backgroundColor: coupon ? undefined : subColor,
                },
              ]}
            />
          </View>
        </View>
        <View style={styles.endTimeContainer}>
          <Text style={styles.title}>表示終了日時</Text>
          <Text style={styles.title}>
            ※指定しない場合は非表示にするまで表示され続けます
          </Text>
          <View style={styles.endTime}>
            {endTime ? (
              <View style={styles.et}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => setDatePickerVisible(true)}
                >
                  <Text>{format(endTime, "M月d日H時mm分")}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginLeft: 15 }}
                  activeOpacity={1}
                  onPress={() => setEndTime(undefined)}
                >
                  <Icon name="trash-can-outline" color="red" size={20} />
                </TouchableOpacity>
              </View>
            ) : (
              <Button
                title="選択"
                buttonStyle={styles.selectDateButton}
                titleStyle={{ fontSize: 14, fontWeight: "500" }}
                activeOpacity={1}
                onPress={() => setDatePickerVisible(true)}
              />
            )}
          </View>
        </View>
        <Button
          title="掲載する"
          containerStyle={{ marginTop: 40, paddingBottom: 20 }}
          buttonStyle={{ backgroundColor: defaultTheme.mainColor }}
          titleStyle={{ fontWeight: "bold" }}
          activeOpacity={1}
          onPress={onPostButtonPress}
          disabled={!title || title.length > 35 || !images.length}
        />
      </ScrollView>
      <DateTimePickerModal
        isVisible={datePickerVisible}
        mode="datetime"
        locale="ja_JP"
        confirmTextIOS="OK"
        cancelTextIOS="キャンセル"
        onConfirm={(date) => {
          setEndTime(date);
          setDatePickerVisible(false);
        }}
        onCancel={() => setDatePickerVisible(false)}
      />
      <TitleExample
        isVisible={titleExVisible}
        setIsVisible={setTitleExVisible}
      />
      {loading && <ToastLoading />}
    </View>
  );
});

const subColor = "#4a4a4a";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#e3e3e3",
  },
  imagesContainer: {
    marginTop: 25,
    width: "100%",
  },
  image: {
    backgroundColor: "white",
    height: 60,
    width: 60,
  },
  title: {
    color: "gray",
  },
  titleContainer: {
    marginTop: 30,
  },
  titleInput: {
    marginTop: 10,
    height: 40,
    fontSize: 15,
    backgroundColor: "white",
  },
  textContainer: {
    marginTop: 30,
  },
  textInput: {
    height: 70,
    backgroundColor: "white",
    marginTop: 10,
    textAlignVertical: "top",
  },
  couponContainer: {
    marginTop: 30,
  },
  couponSelect: {
    flexDirection: "row",
    marginTop: 10,
    width: 100,
    justifyContent: "space-between",
  },
  couponTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  couponButton: {
    borderRadius: 20,
  },
  endTimeContainer: {
    marginTop: 30,
  },
  endTime: {
    marginTop: 10,
  },
  selectDateButton: {
    width: 80,
    marginTop: 10,
    backgroundColor: subColor,
  },
  et: {
    flexDirection: "row",
    alignItems: "center",
  },
  exapmleTitle: {
    color: defaultTheme.linkColor,
    textDecorationLine: "underline",
  },
});

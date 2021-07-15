import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";

import { Images } from "./Images";
import { defaultTheme } from "~/styles";
import { useCreatePost } from "~/hooks/posts";

export const Post = React.memo(() => {
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [coupon, setCoupon] = useState(false);
  const [endTime, setEndTime] = useState<Date>();

  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const { createPost } = useCreatePost();

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
          <Text style={styles.title}>タイトル</Text>
          <TextInput
            style={styles.titleInput}
            onChangeText={(t) => setTitle(t)}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>本文</Text>
          <TextInput
            style={styles.textInput}
            multiline={true}
            onChangeText={(t) => setText(t)}
          />
        </View>
        <View style={styles.couponContainer}>
          <Text style={styles.title}>クーポンの有無</Text>
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
                  backgroundColor: coupon ? defaultTheme.mainColor : undefined,
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
                  backgroundColor: coupon ? undefined : defaultTheme.mainColor,
                },
              ]}
            />
          </View>
        </View>
        <View style={styles.endTimeContainer}>
          <Text style={styles.title}>表示終了日時</Text>
          <Text style={styles.title}>
            ※指定しない場合は削除するまで表示され続けます
          </Text>
          <View style={styles.endTime}>
            {endTime ? (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setDatePickerVisible(true)}
              >
                <Text>{format(endTime, "M月d日H時mm分")}</Text>
              </TouchableOpacity>
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
          containerStyle={{ marginTop: 40 }}
          buttonStyle={{ backgroundColor: defaultTheme.mainColor }}
          titleStyle={{ fontWeight: "bold" }}
          activeOpacity={1}
          onPress={onPostButtonPress}
          disabled={!title || !images.length}
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
    </View>
  );
});

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
    height: 30,
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
    height: 30,
    marginTop: 10,
    backgroundColor: defaultTheme.mainColor,
  },
});

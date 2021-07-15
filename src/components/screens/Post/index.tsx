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

import { Images } from "./Images";
import { defaultTheme } from "~/styles";

export const Post = React.memo(() => {
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [coupon, setCoupon] = useState(false);
  const [endTime, setEndTime] = useState();

  const [datePickerVisible, setDatePickerVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imagesContainer}>
          <Images images={images} setImages={setImages} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>タイトル</Text>
          <TextInput style={styles.titleInput} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>本文</Text>
          <TextInput style={styles.textInput} multiline={true} />
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
          <Button
            title="選択"
            buttonStyle={styles.selectDateButton}
            titleStyle={{ fontSize: 14, fontWeight: "500" }}
            activeOpacity={1}
            onPress={() => setDatePickerVisible(true)}
          />
        </View>
      </ScrollView>
      <DateTimePickerModal
        isVisible={datePickerVisible}
        mode="datetime"
        locale="en_GB"
        confirmTextIOS="OK"
        cancelTextIOS="キャンセル"
        onConfirm={() => {}}
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
  selectDateButton: {
    width: 80,
    height: 30,
    marginTop: 10,
    backgroundColor: defaultTheme.mainColor,
  },
});

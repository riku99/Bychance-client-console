import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

export const Posts = React.memo(() => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.contents}>
            <View style={styles.mainSection}></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  contents: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  mainSection: {
    height: "40%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
});

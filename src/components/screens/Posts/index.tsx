import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import FastImage from "react-native-fast-image";

export const Posts = React.memo(() => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.contents}>
            <View style={styles.mainSection}>
              <FastImage
                style={{ width: "100%", height: "50%" }}
                source={{
                  uri: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210835488_333746528206564_4270119861468804611_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QbTSkgFSFqQAX8Py7au&edm=AP_V10EBAAAA&ccb=7-4&oh=dcdb8e2c31ece5f19f29449e2a04fb30&oe=60F74D38&_nc_sid=4f375e",
                }}
              />
              <View style={styles.introContainer}>
                <Text style={styles.title}>
                  ラテの美味しいオシャレなカフェでゆったりしませんか??
                </Text>
              </View>
            </View>
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
    height: "50%",
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
  introContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
});

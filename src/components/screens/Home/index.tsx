import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Profile } from "./Profile";
import { CreateButton } from "./CreateButton";
import { CrateAlertModal } from "./CreateAlertModal";

export const Home = React.memo(() => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Profile />
      </View>
      <View style={styles.createButton}>
        <CreateButton setModalVisible={setModalVisible} />
      </View>
      <CrateAlertModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  profileContainer: {
    marginTop: 25,
  },
  createButton: {
    position: "absolute",
    right: "5%",
    bottom: "3%",
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

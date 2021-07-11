import React from "react";
import { View, StyleSheet } from "react-native";

import { Section } from "~/components/utils/Section";

export const Home = React.memo(() => {
  return (
    <View style={styles.container}>
      <Section style={{ height: 100, marginTop: 100 }}>
        <View />
      </Section>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});

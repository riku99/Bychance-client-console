import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { MapEvent, Marker } from "react-native-maps";

import { Section } from "~/components/utils/Section";

const Props = {};

export const MapForAddress = React.memo(() => {
  return (
    <Section style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>選択された住所</Text>
        <Text style={styles.address}>千葉県千葉市1-1</Text>
      </View>
    </Section>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  map: {
    width: "100%",
    height: "75%",
  },
  addressContainer: {
    paddingLeft: 8,
  },
  addressTitle: {
    fontWeight: "500",
    marginTop: 20,
  },
  address: {
    marginTop: 8,
  },
});

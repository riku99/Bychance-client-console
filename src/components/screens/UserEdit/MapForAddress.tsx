import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  PermissionsAndroid,
} from "react-native";
import MapView, { MapEvent, Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { Section } from "~/components/utils/Section";

type Props = {
  setValue: (v: string) => void;
};

export const MapForAddress = React.memo(({}: Props) => {
  const [selectedCoordinate, setSelectedCoordinate] = useState<{
    lat: number;
    lng: number;
  }>();

  const onSelectMap = (e: MapEvent) => {
    const { coordinate } = e.nativeEvent;
    setSelectedCoordinate({
      lat: coordinate.latitude,
      lng: coordinate.longitude,
    });
  };

  //35.681015330713834, 139.76697891862133
  const region = useMemo(
    () => ({
      latitude: 35.681015330713834,
      longitude: 139.76697891862133,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    }),
    []
  );

  return (
    <Section style={styles.container}>
      <MapView
        onMapReady={() => {
          Platform.OS === "android"
            ? PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
              )
            : "";
        }}
        style={styles.map}
        onPress={onSelectMap}
        showsUserLocation
        provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
      >
        {selectedCoordinate && (
          <Marker
            coordinate={{
              latitude: selectedCoordinate.lat,
              longitude: selectedCoordinate.lng,
            }}
          />
        )}
      </MapView>
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

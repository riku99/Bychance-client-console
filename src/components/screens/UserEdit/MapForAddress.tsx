import React, { useState, useMemo } from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  PermissionsAndroid,
} from "react-native";
import MapView, { MapEvent, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Geocoder from "react-native-geocoding";

import { Section } from "~/components/utils/Section";
import { useGetGeolocation } from "~/hooks/geolocation";
import { formatAddress } from "~/utils";

type Props = {
  setValue: (v: string) => void;
};

// AIzaSyBtxyRxUb6pHnav1B9TGeufmM0hqp0yHGg
Geocoder.init("AIzaSyBtxyRxUb6pHnav1B9TGeufmM0hqp0yHGg", { language: "ja" });

export const MapForAddress = React.memo(({}: Props) => {
  const { position } = useGetGeolocation();

  const [selectedCoordinate, setSelectedCoordinate] = useState<{
    lat: number;
    lng: number;
  }>();

  const onSelectMap = async (e: MapEvent) => {
    const { coordinate } = e.nativeEvent;
    setSelectedCoordinate({
      lat: coordinate.latitude,
      lng: coordinate.longitude,
    });

    const addressData = await Geocoder.from(
      coordinate.latitude,
      coordinate.longitude
    );
    const _address = formatAddress(addressData.results[0].formatted_address);
    console.log(_address);
  };

  const region = useMemo(() => {
    if (position?.latitude && position.longitude) {
      return {
        latitude: position?.latitude,
        longitude: position?.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };
    }
  }, [position]);

  return (
    <Section style={styles.container}>
      <MapView
        region={region}
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

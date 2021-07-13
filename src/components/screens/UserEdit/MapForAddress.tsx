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
  setPosition?: (v: { lat: number; lng: number }) => void;
};

// AIzaSyBtxyRxUb6pHnav1B9TGeufmM0hqp0yHGg
Geocoder.init("AIzaSyBtxyRxUb6pHnav1B9TGeufmM0hqp0yHGg", { language: "ja" });

export const MapForAddress = React.memo(({ setValue, setPosition }: Props) => {
  const { position } = useGetGeolocation();

  const [selectedCoordinate, setSelectedCoordinate] = useState<{
    lat: number;
    lng: number;
  }>();

  const [address, setAddress] = useState("");

  const onSelectMap = async (e: MapEvent) => {
    const { coordinate } = e.nativeEvent;
    const latlingData = {
      lat: coordinate.latitude,
      lng: coordinate.longitude,
    };
    setSelectedCoordinate(latlingData);

    const addressData = await Geocoder.from(
      coordinate.latitude,
      coordinate.longitude
    );
    const _address = formatAddress(addressData.results[0].formatted_address);
    setValue(_address);
    setAddress(_address);
    if (setPosition) {
      setPosition(latlingData);
    }
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
    <View style={styles.container}>
      <Text style={styles.selectAddressText}>
        マップ上から住所を選択してください
      </Text>
      <Section style={{ marginTop: 10 }}>
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
          <Text style={styles.address}>{address}</Text>
        </View>
      </Section>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  map: {
    width: "100%",
    height: "70%",
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
  selectAddressText: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 20,
  },
});

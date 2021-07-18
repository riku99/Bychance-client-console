import React, { useMemo } from "react";
import { Platform, PermissionsAndroid } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

type Props = {
  lat: number;
  lng: number;
};

export const Map = React.memo(({ lat, lng }: Props) => {
  const region = useMemo(() => {
    return {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    };
  }, []);

  return (
    <MapView
      region={region}
      showsUserLocation
      style={{ width: "100%", height: "100%" }}
      provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
      onMapReady={() => {
        Platform.OS === "android"
          ? PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            )
          : "";
      }}
    >
      <Marker
        coordinate={{ latitude: region.latitude, longitude: region.longitude }}
      />
    </MapView>
  );
});

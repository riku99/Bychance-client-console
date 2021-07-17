import React from "react";
import { Platform, PermissionsAndroid } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export const Map = React.memo(() => {
  return (
    <MapView
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
    />
  );
});

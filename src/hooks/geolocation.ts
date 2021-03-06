import { useState, useEffect } from "react";
import { Platform } from "react-native";
import Geolocation from "react-native-geolocation-service";

export const useGetGeolocation = () => {
  const [position, setPosition] =
    useState<{ latitude: number; longitude: number }>();

  useEffect(() => {
    const getPosition = async () => {
      const permission =
        Platform.OS === "ios"
          ? await Geolocation.requestAuthorization("whenInUse")
          : "android";
      if (permission === "granted" || "restricted" || "android") {
        Geolocation.getCurrentPosition(
          (position) => {
            setPosition({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {},
          { timeout: 2000 } // timeout設定しないとちゃんと動かない https://github.com/Agontuk/react-native-geolocation-service/issues/244
        );
      }
    };

    getPosition();
  }, []);

  return {
    position,
  };
};

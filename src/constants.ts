import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export const bottomToastWidth = width * 0.9;

export const origin = "http:/localhost:4001";

export const baseUrl = `${origin}/api/v1`;

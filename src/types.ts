import { AxiosError } from "axios";

export type ApiError =
  | { errorType: "invalidError"; message: string }
  | { errorType: "loginError" }
  | { errorType: "someError" };

export type BasicAxiosError = AxiosError<ApiError>;

export type ApiRecommendation = {
  id: number;
  title: string;
  coupon: boolean;
  text: string;
  images: {
    url: string;
  }[];
  client: {
    url: string | null;
    name: string;
    image: string | null;
    instagram: string | null;
    twitter: string | null;
    address: string | null;
    lat: number | null;
    lng: number | null;
  };
};

import { AxiosError } from "axios";

export type ApiError =
  | { errorType: "invalidError"; message: string }
  | { errorType: "loginError" }
  | { errorType: "someError" };

export type BasicAxiosError = AxiosError<ApiError>;

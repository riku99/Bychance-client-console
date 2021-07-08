import { default as axios } from "axios";

import { baseUrl } from "~/constants";
import { BasicAxiosError } from "~/types";
import { useCustomDispatch } from "./stores";
import { setApiError } from "~/stores/errors";

export const useSignupToken = () => {
  const dispatch = useCustomDispatch();

  const verifySignupToken = async (token: string) => {
    try {
      await axios.get(`${baseUrl}/clientSignupToken/${token}`);
    } catch (e) {
      if (e && e.response) {
        const axiosError = e as BasicAxiosError;
        if (axiosError.response?.data) {
          dispatch(setApiError(axiosError.response.data));
        } else {
          dispatch(setApiError({ errorType: "someError" }));
        }
      }
    }
  };

  return {
    verifySignupToken,
  };
};

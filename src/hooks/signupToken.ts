import { default as axios } from "axios";

import { baseUrl } from "~/constants";
import { useHandleApiErrors } from "./errors";

export const useSignupToken = () => {
  const { handleError } = useHandleApiErrors();

  const verifySignupToken = async (token: string) => {
    try {
      return await axios.get(`${baseUrl}/clientSignupToken/${token}`);
    } catch (e) {
      handleError(e);
    }
  };

  return {
    verifySignupToken,
  };
};

import { useCallback, useState } from "react";
import { default as axios } from "axios";

import { baseUrl } from "~/constants";
import { useHandleApiErrors } from "./errors";

export const useSignupToken = () => {
  const { handleError } = useHandleApiErrors();

  const [isLoading, setIsloading] = useState(false);

  const verifySignupToken = useCallback(async (token: string) => {
    setIsloading(true);
    try {
      return await axios.get(`${baseUrl}/clientSignupToken/${token}`);
    } catch (e) {
      handleError(e);
    } finally {
      setIsloading(false);
    }
  }, []);

  return {
    verifySignupToken,
    isLoading,
  };
};

import { useCallback, useState } from "react";
import { default as axios } from "axios";

import { baseUrl } from "~/constants";
import { useHandleApiErrors } from "./errors";
import { useApikit } from "./apikit";
import { addBearer } from "~/helpers/api";

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

export const useCreateSignupToken = () => {
  const [isLoading, setIsloading] = useState(false);

  const { getIdToken, handleError } = useApikit();

  const create = useCallback(async () => {
    setIsloading(true);

    const idToken = await getIdToken();

    try {
      const result = await axios.post<string>(
        `${baseUrl}/clientSignupToken`,
        {},
        addBearer(idToken)
      );

      return result.data;
    } catch (e) {
      handleError(e);
    } finally {
      setIsloading(false);
    }
  }, []);

  return {
    create,
    isLoading,
  };
};

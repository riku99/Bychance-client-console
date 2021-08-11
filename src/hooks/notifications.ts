import { useCallback, useEffect, useState } from "react";

import { useApikit } from "./apikit";
import { NotificationsResponse } from "~/types/api/notifications";
import axios from "axios";
import { baseUrl } from "~/constants";

export const useGetNotificatoins = () => {
  const { getIdToken, handleError, addBearer } = useApikit();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<NotificationsResponse>([]);

  useEffect(() => {
    const _get = async () => {
      const token = await getIdToken();

      try {
        const response = await axios.get<NotificationsResponse>(
          `${baseUrl}/recommendationClientNotifications`,
          addBearer(token)
        );

        console.log(response.data);
        setResult(response.data);
      } catch (e) {
        handleError(e);
      } finally {
        setIsLoading(false);
      }
    };
    _get();
  }, []);

  return {
    isLoading,
    result,
  };
};

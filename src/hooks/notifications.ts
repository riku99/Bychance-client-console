import { useCallback, useEffect, useState } from "react";

import { useApikit } from "./apikit";
import { NotificationsResponse, UnreadData } from "~/types/api/notifications";
import axios from "axios";
import { baseUrl } from "~/constants";
import { setUnredNotifications } from "~/stores/notifications";

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

export const useGetUnreadNotifications = () => {
  const { handleError, getIdToken, addBearer, dispatch } = useApikit();

  const getUnreadNotifications = useCallback(async () => {
    try {
      const token = await getIdToken();

      const response = await axios.get<UnreadData>(
        `${baseUrl}/recommendationClientNotifications/unread`,
        addBearer(token)
      );

      dispatch(setUnredNotifications(response.data));
    } catch (e) {
      // handleError(e);
    }
  }, []);

  return {
    getUnreadNotifications,
  };
};

import { useCallback, useMemo, useState, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { useApikit } from "./apikit";
import { NotificationsResponse, UnreadData } from "~/types/api/notifications";
import axios from "axios";
import { baseUrl } from "~/constants";
import { setUnredNotifications } from "~/stores/notifications";
import { RootState } from "~/stores";
import { useFocusEffect } from "@react-navigation/native";

export const useGetNotificatoins = () => {
  const { getIdToken, handleError, addBearer } = useApikit();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<NotificationsResponse>([]);
  const unreadNumebr = useSelector(
    (state: RootState) => state.notificationsReducer.unread.length
  );
  const doneFirstRender = useRef(false);

  const getNotificatoins = useCallback(async () => {
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
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (unreadNumebr || !doneFirstRender.current) {
        getNotificatoins();
        if (!doneFirstRender.current) {
          doneFirstRender.current = true;
        }
      }
    }, [unreadNumebr])
  );

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

export const useCreateReadNotifications = () => {
  const { addBearer, getIdToken, dispatch } = useApikit();

  const unreadData = useSelector(
    (state: RootState) => state.notificationsReducer.unread,
    shallowEqual
  );

  const ids = useMemo(() => unreadData.map((d) => d.id), [unreadData]);

  const createReadNotifications = useCallback(async () => {
    try {
      const token = await getIdToken();
      await axios.post(
        `${baseUrl}/recommendationClient/notifications/read`,
        {
          ids,
        },
        addBearer(token)
      );

      dispatch(setUnredNotifications([]));
    } catch (e) {}
  }, [ids]);

  useFocusEffect(
    useCallback(() => {
      if (ids.length) {
        createReadNotifications();
      }
    }, [ids])
  );
};

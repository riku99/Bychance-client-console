import React, { useEffect } from "react";
import { useToast } from "react-native-fast-toast";
import { useSelector } from "react-redux";

import { RootState } from "~/stores";
import { useCustomDispatch } from "~/hooks/stores";
import { resetError } from "~/stores/errors";
import { bottomToastWidth } from "~/constants";
import { BasicAxiosError } from "~/types";
import { setApiError } from "~/stores/errors";

export const useHandleErrors = () => {
  const toast = useToast();
  const dispatch = useCustomDispatch();
  const error = useSelector((state: RootState) => state.errorsReducer.apiError);

  useEffect(() => {
    if (error) {
      switch (error.errorType) {
        case "invalidError":
          toast.show(error.message, {
            type: "danger",
            style: {
              width: bottomToastWidth,
            },
          });
          break;
        case "loginError":
          // ログインエラー処理
          console.log("ログインエラー");
          break;
        default:
          toast.show("何らかのエラーが発生しました", {
            type: "danger",
            style: {
              width: bottomToastWidth,
            },
          });
      }
      dispatch(resetError());
    }
  }, [error]);
};

export const useHandleApiErrors = () => {
  const dispatch = useCustomDispatch();

  const handleError = (e: any) => {
    if (e && e.response) {
      const axiosError = e as BasicAxiosError;
      if (axiosError.response?.data) {
        dispatch(setApiError(axiosError.response.data));
      } else {
        dispatch(setApiError({ errorType: "someError" }));
      }
    }
  };

  return {
    handleError,
  };
};

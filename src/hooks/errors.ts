import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { useToast } from "react-native-fast-toast";
import { useSelector } from "react-redux";

import { RootState } from "~/stores";
import { useCustomDispatch } from "~/hooks/stores";
import { resetError } from "~/stores/errors";

export const useHandleErrors = () => {
  const toast = useToast();
  const dispatch = useCustomDispatch();
  const error = useSelector((state: RootState) => state.errorsReducer.apiError);

  useEffect(() => {
    if (error) {
      switch (error.errorType) {
        case "invalidError":
          toast.show(error.message, { type: "danger" });
          break;
        case "loginError":
          // ログインエラー処理
          console.log("ログインエラー");
          break;
      }
      dispatch(resetError());
    }
  }, [error]);
};

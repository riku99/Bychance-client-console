import React, { useEffect } from "react";
import { useToast } from "react-native-fast-toast";
import { useSelector } from "react-redux";

import { RootState } from "~/stores";
import { useCustomDispatch } from "~/hooks/stores";
import { resetError } from "~/stores/errors";
import { bottomToastWidth } from "~/constants";

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
      // dispatch(resetError());
    }
  }, [error]);
};

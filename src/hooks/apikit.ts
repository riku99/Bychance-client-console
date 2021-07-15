import { useToast } from "react-native-fast-toast";
import { useNavigation } from "@react-navigation/native";

import { useIdToken } from "./auth";
import { useHandleApiErrors } from "./errors";
import { useCustomDispatch } from "./stores";

export const useApikit = () => {
  const toast = useToast();
  const dispatch = useCustomDispatch();
  const { getIdToken } = useIdToken();
  const { handleError } = useHandleApiErrors();
  const navigation = useNavigation();

  return {
    toast,
    dispatch,
    getIdToken,
    handleError,
    navigation,
  };
};

import { useCallback } from "react";
import { User } from "~/stores/users";
import fs from "react-native-fs";
import { useToast } from "react-native-fast-toast";
import { default as axios } from "axios";
import auth from "@react-native-firebase/auth";

import { getExtention } from "~/utils";
import { useIdToken } from "./auth";
import { useHandleApiErrors } from "./errors";
import { useCustomDispatch } from "./stores";
import { setApiError } from "~/stores/errors";
import { addBearer } from "~/helpers/api";
import { baseUrl } from "~/constants";

type UserEdit = Pick<
  User,
  "name" | "address" | "image" | "instagram" | "twitter" | "url"
>;

export const useEditUser = () => {
  const toast = useToast();
  const dispatch = useCustomDispatch();
  const { getIdToken } = useIdToken();
  const { handleError } = useHandleApiErrors();

  const editUser = useCallback(
    async ({ name, address, image, instagram, twitter, url }: UserEdit) => {
      let ext: string | null = null;
      let imageData: string | null = null;

      if (image) {
        ext = getExtention(image);
        if (!ext) {
          toast.show("無効なデータです", { type: "danger" });
          return;
        }
        imageData = await fs.readFile(image, "base64");
        if (!imageData) {
          toast.show("無効なデータです", { type: "danger" });
          return;
        }
      }

      const idToken = await getIdToken();

      try {
        await axios.patch(
          `${baseUrl}/recommendationClients`,
          {
            name: name ? name : undefined,
            address: address ? address : undefined,
            image: imageData ? imageData : undefined,
            ext: ext ? ext : undefined,
            instagram: instagram ? instagram : undefined,
            twitter: twitter ? twitter : undefined,
            url: url ? url : undefined,
          },
          addBearer(idToken)
        );
      } catch (e) {
        handleError(e);
      }
    },
    []
  );

  return {
    editUser,
  };
};

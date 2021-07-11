import { useCallback } from "react";
import { User } from "~/stores/users";
import fs from "react-native-fs";

import { getExtention } from "~/utils";

type UserEdit = Pick<
  User,
  "name" | "address" | "image" | "instagram" | "twitter" | "url"
>;

export const useEditUser = () => {
  const editUser = useCallback(
    async ({ name, address, image, instagram, twitter, url }: UserEdit) => {
      let ext: string | null = null;
      let newImageUrl: string | null = null;

      console.log(name);
      if (image) {
        ext = getExtention(image);
        const base64 = await fs.readFile(image, "base64");
        console.log(base64);
      }
    },
    []
  );

  return {
    editUser,
  };
};

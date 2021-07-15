import { useCallback, useState } from "react";
import fs from "react-native-fs";
import { default as axios } from "axios";

import { useApikit } from "./apikit";
import { getExtention } from "~/utils";
import { baseUrl } from "~/constants";
import { addBearer } from "~/helpers/api";

type CreateRecommendation = {
  title: string;
  text: string;
  coupon: boolean;
  endTime?: Date;
  images: string[];
};

const createImageData = async (uri: string) => {
  const ext = getExtention(uri);
  const src = await fs.readFile(uri, "base64");
  return { ext, src };
};

export const useCreatePost = () => {
  const { toast, dispatch, getIdToken, handleError } = useApikit();

  const [loading, setLoading] = useState(false);

  const createPost = useCallback(
    async ({ title, text, coupon, endTime, images }: CreateRecommendation) => {
      setLoading(true);

      let promiseData: Promise<any>[] = [];

      images.forEach((uri) => {
        promiseData.push(createImageData(uri));
      });

      const imageData = await Promise.all(promiseData);

      const idToken = await getIdToken();

      try {
        const result = await axios.post(
          `${baseUrl}/recommendations`,
          {
            title,
            text,
            coupon,
            endTime,
            images: imageData,
          },
          addBearer(idToken)
        );
      } catch (e) {}
    },
    []
  );

  return {
    createPost,
    loading,
  };
};
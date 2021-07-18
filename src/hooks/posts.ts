import { useCallback, useEffect, useState } from "react";
import fs from "react-native-fs";
import { default as axios } from "axios";

import { useApikit } from "./apikit";
import { getExtention } from "~/utils";
import { baseUrl } from "~/constants";
import { addBearer } from "~/helpers/api";
import { ApiRecommendation } from "types";

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
  const { toast, getIdToken, handleError, navigation } = useApikit();

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
        await axios.post(
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

        toast.show("作成しました", { type: "success" });
        navigation.goBack();
      } catch (e) {
        handleError(e);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    createPost,
    loading,
  };
};

export const useGetPosts = () => {
  const { getIdToken, handleError } = useApikit();

  const [data, setData] = useState<ApiRecommendation[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      const idToken = await getIdToken();

      try {
        const result = await axios.get<ApiRecommendation[]>(
          `${baseUrl}/recommendations/client`,
          addBearer(idToken)
        );

        setData(result.data);
      } catch (e) {
        handleError(e);
      } finally {
        setLoading(false);
      }
    };
    get();
  }, []);

  return {
    data,
    loading,
  };
};

import { useCallback, useEffect, useState } from "react";
import fs from "react-native-fs";
import { default as axios } from "axios";
import { Recommendation } from "bychance-components";

import { useApikit } from "./apikit";
import { getExtention } from "~/utils";
import { baseUrl } from "~/constants";
import { addBearer } from "~/helpers/api";
import { ApiRecommendation } from "types";
import { id } from "date-fns/locale";

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

export const useGetPosts = (type: "now" | "past" = "past") => {
  const { getIdToken, handleError } = useApikit();

  const [data, setData] = useState<Recommendation[]>();
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    const idToken = await getIdToken();

    try {
      const result = await axios.get<ApiRecommendation[]>(
        type === "now"
          ? `${baseUrl}/recommendations/client?type=now`
          : `${baseUrl}/recommendations/client`,
        addBearer(idToken)
      );

      const formated = result.data.map((r) => {
        const { id, title, text, images, coupon, client } = r;
        const imagesData = images.map((d) => d.url);

        return {
          id,
          title,
          text,
          images: imagesData,
          coupon,
          name: client.name,
          address: client.address,
          lat: client.lat,
          lng: client.lng,
          instagram: client.instagram,
          twitter: client.twitter,
          url: client.url,
          avatar: client.image,
        };
      });

      setData(formated);
    } catch (e) {
      handleError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    loading,
    getData,
  };
};

export const useHidePost = () => {
  const [loading, setLoading] = useState(false);
  const { toast, getIdToken, handleError, navigation } = useApikit();

  const hidePost = useCallback(
    async ({ id }: { id: number }) => {
      setLoading(true);

      const idToken = await getIdToken();

      try {
        await axios.get(
          `${baseUrl}/recommendations/hide/${id}`,
          addBearer(idToken)
        );

        toast.show("非表示にしました", { type: "success" });
      } catch (e) {
        handleError(e);
      } finally {
        setLoading(false);
      }
    },
    [id]
  );

  return {
    loading,
    hidePost,
  };
};

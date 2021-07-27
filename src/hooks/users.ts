import { useCallback, useState } from "react";
import { Alert } from "react-native";
import fs from "react-native-fs";
import { useToast } from "react-native-fast-toast";
import { default as axios } from "axios";
import auth from "@react-native-firebase/auth";

import { getExtention } from "~/utils";
import { useIdToken } from "./auth";
import { useHandleApiErrors } from "./errors";
import { useCustomDispatch } from "./stores";
import { addBearer } from "~/helpers/api";
import { baseUrl } from "~/constants";
import { setUser, User, setShowdPostModal } from "~/stores/users";
import { useApikit } from "./apikit";
import { setLogin } from "~/stores/sessions";

type UserEdit = Pick<
  User,
  "name" | "address" | "image" | "instagram" | "twitter" | "url" | "lat" | "lng"
>;

export const useEditUser = () => {
  const toast = useToast();
  const dispatch = useCustomDispatch();
  const { getIdToken } = useIdToken();
  const { handleError } = useHandleApiErrors();

  const [isLoading, setIsloading] = useState(false);

  const editUser = useCallback(
    async ({
      name,
      address,
      image,
      instagram,
      twitter,
      url,
      lat,
      lng,
    }: UserEdit) => {
      setIsloading(true);
      let ext: string | null = null;
      let imageData: string | null = null;

      if (image) {
        ext = getExtention(image);
        if (!ext) {
          toast.show("無効なデータです", { type: "danger" });
          setIsloading(false);
          return;
        }
        imageData = await fs.readFile(image, "base64");
        if (!imageData) {
          toast.show("無効なデータです", { type: "danger" });
          setIsloading(false);
          return;
        }
      }

      const idToken = await getIdToken();

      try {
        const resut = await axios.patch<User>(
          `${baseUrl}/recommendationClients`,
          {
            name: name ? name : undefined,
            address: address ? address : undefined,
            image: imageData ? imageData : undefined,
            ext: ext ? ext : undefined,
            instagram: instagram ? instagram : undefined,
            twitter: twitter ? twitter : undefined,
            url: url ? url : undefined,
            lat: lat ? lat : undefined,
            lng: lng ? lng : undefined,
          },
          addBearer(idToken)
        );

        dispatch(setUser(resut.data));
        toast.show("更新しました", { type: "success" });
      } catch (e) {
        handleError(e);
      } finally {
        setIsloading(false);
      }
    },
    []
  );

  return {
    editUser,
    isLoading,
  };
};

export const useChangeShowedPostModal = () => {
  const { getIdToken, dispatch } = useApikit();

  const change = useCallback(async () => {
    const token = await getIdToken();
    try {
      await axios.patch(
        `${baseUrl}/recommendationClients/showedPostModal`,
        {},
        addBearer(token)
      );

      dispatch(setShowdPostModal(true));
    } catch (e) {}
  }, []);

  return {
    change,
  };
};

export const useDeleteUser = () => {
  const { dispatch, getIdToken, handleError } = useApikit();

  const [isLoading, setIsloading] = useState(false);

  const inputPassword = useCallback((): Promise<string> => {
    return new Promise((resolve, reject) => {
      Alert.prompt(
        "パスワードを入力してください",
        "",
        [
          {
            text: "OK",
            onPress: (t) => {
              resolve(t);
            },
          },
          {
            text: "キャンセル",
            onPress: () => {
              reject();
            },
          },
        ],
        "secure-text"
      );
    });
  }, []);

  const inputEmail = useCallback((): Promise<string> => {
    return new Promise((resolve, reject) => {
      Alert.prompt("メールアドレスを入力してください", "", [
        {
          text: "OK",
          onPress: (t) => {
            resolve(t);
          },
        },
        {
          text: "キャンセル",
          onPress: () => {
            reject();
          },
        },
      ]);
    });
  }, []);

  const _delete = useCallback(async () => {
    try {
      const email = await inputEmail();
      const password = await inputPassword();

      try {
        setIsloading(true);
        await auth().signInWithEmailAndPassword(email, password);
        setIsloading(false);
        try {
          Alert.alert(
            "アカウントを削除してよろしいですか?",
            "復旧させることはできません",
            [
              {
                text: "削除",
                style: "destructive",
                onPress: async () => {
                  setIsloading(true);
                  const idToken = await getIdToken();
                  await axios.delete(
                    `${baseUrl}/recommendationClients`,
                    addBearer(idToken)
                  );
                  await auth().signOut();
                  setIsloading(false);
                  dispatch(setLogin(false));
                  dispatch(setUser());
                },
              },
              {
                text: "キャンセル",
              },
            ]
          );
        } catch (e) {
          handleError(e);
        }
      } catch (e) {
        Alert.alert("エラー", "メールアドレスまたはパスワードが間違っています");
      }
    } catch (e) {}
    setIsloading(false);
  }, []);

  return {
    _delete,
    isLoading,
  };
};

import React, { useCallback, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { RecommendationList, Recommendation } from "bychance-components";

import { PostsNavigationProp } from "~/navigations/Posts";
import { useGetPosts } from "~/hooks/posts";
import { StyleSheet, View } from "react-native";

const _data = [
  {
    id: 1,
    name: "cafe newTokyo",
    avatar:
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/218410191_355142425985263_6733373022815732229_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=x1rPnadrd3oAX9KaDsm&edm=AP_V10EBAAAA&ccb=7-4&oh=1648087381dfc97a26a9b3b1e095beca&oe=60F8EF40&_nc_sid=4f375e",
    title: "ラテの美味しいオシャレなカフェでゆったりしませんか??",
    text: "",
    images: [
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210835488_333746528206564_4270119861468804611_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QbTSkgFSFqQAX8Py7au&edm=AP_V10EBAAAA&ccb=7-4&oh=dcdb8e2c31ece5f19f29449e2a04fb30&oe=60F74D38&_nc_sid=4f375e",
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210835488_333746528206564_4270119861468804611_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QbTSkgFSFqQAX8Py7au&edm=AP_V10EBAAAA&ccb=7-4&oh=dcdb8e2c31ece5f19f29449e2a04fb30&oe=60F74D38&_nc_sid=4f375e",
    ],
    coupon: true,
    distance: 500,
    url: null,
    instagram: "https://www.instagram.com/rik0999/",
    twitter: "https://twitter.com/V44Qt5u9ExgcXut",
    address: "",
    lat: 1,
    lng: 1,
  },
  {
    id: 2,
    name: "cafe newTokyo",
    avatar:
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/218410191_355142425985263_6733373022815732229_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=x1rPnadrd3oAX9KaDsm&edm=AP_V10EBAAAA&ccb=7-4&oh=1648087381dfc97a26a9b3b1e095beca&oe=60F8EF40&_nc_sid=4f375e",
    title: "ラテの美味しいオシャレなカフェでゆったりしませんか??",
    text: "",
    images: [
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210835488_333746528206564_4270119861468804611_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QbTSkgFSFqQAX8Py7au&edm=AP_V10EBAAAA&ccb=7-4&oh=dcdb8e2c31ece5f19f29449e2a04fb30&oe=60F74D38&_nc_sid=4f375e",
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210835488_333746528206564_4270119861468804611_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QbTSkgFSFqQAX8Py7au&edm=AP_V10EBAAAA&ccb=7-4&oh=dcdb8e2c31ece5f19f29449e2a04fb30&oe=60F74D38&_nc_sid=4f375e",
    ],
    coupon: true,
    distance: 500,
    url: null,
    instagram: "https://www.instagram.com/rik0999/",
    twitter: "https://twitter.com/V44Qt5u9ExgcXut",
    address: "",
    lat: 1,
    lng: 1,
  },
  {
    id: 3,
    name: "cafe newTokyo",
    avatar:
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/218410191_355142425985263_6733373022815732229_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=x1rPnadrd3oAX9KaDsm&edm=AP_V10EBAAAA&ccb=7-4&oh=1648087381dfc97a26a9b3b1e095beca&oe=60F8EF40&_nc_sid=4f375e",
    title: "ラテの美味しいオシャレなカフェでゆったりしませんか??",
    text: "",
    images: [
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210835488_333746528206564_4270119861468804611_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QbTSkgFSFqQAX8Py7au&edm=AP_V10EBAAAA&ccb=7-4&oh=dcdb8e2c31ece5f19f29449e2a04fb30&oe=60F74D38&_nc_sid=4f375e",
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210835488_333746528206564_4270119861468804611_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QbTSkgFSFqQAX8Py7au&edm=AP_V10EBAAAA&ccb=7-4&oh=dcdb8e2c31ece5f19f29449e2a04fb30&oe=60F74D38&_nc_sid=4f375e",
    ],
    coupon: true,
    distance: 500,
    url: null,
    instagram: "https://www.instagram.com/rik0999/",
    twitter: "https://twitter.com/V44Qt5u9ExgcXut",
    address: "",
    lat: 1,
    lng: 1,
  },
  {
    id: 4,
    name: "cafe newTokyo",
    avatar:
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/218410191_355142425985263_6733373022815732229_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=x1rPnadrd3oAX9KaDsm&edm=AP_V10EBAAAA&ccb=7-4&oh=1648087381dfc97a26a9b3b1e095beca&oe=60F8EF40&_nc_sid=4f375e",
    title: "ラテの美味しいオシャレなカフェでゆったりしませんか??",
    text: "",
    images: [
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210835488_333746528206564_4270119861468804611_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QbTSkgFSFqQAX8Py7au&edm=AP_V10EBAAAA&ccb=7-4&oh=dcdb8e2c31ece5f19f29449e2a04fb30&oe=60F74D38&_nc_sid=4f375e",
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210835488_333746528206564_4270119861468804611_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QbTSkgFSFqQAX8Py7au&edm=AP_V10EBAAAA&ccb=7-4&oh=dcdb8e2c31ece5f19f29449e2a04fb30&oe=60F74D38&_nc_sid=4f375e",
    ],
    coupon: true,
    distance: 500,
    url: null,
    instagram: "https://www.instagram.com/rik0999/",
    twitter: "https://twitter.com/V44Qt5u9ExgcXut",
    address: "",
    lat: 1,
    lng: 1,
  },
  {
    id: 5,
    name: "cafe newTokyo",
    avatar:
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/218410191_355142425985263_6733373022815732229_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=x1rPnadrd3oAX9KaDsm&edm=AP_V10EBAAAA&ccb=7-4&oh=1648087381dfc97a26a9b3b1e095beca&oe=60F8EF40&_nc_sid=4f375e",
    title: "ラテの美味しいオシャレなカフェでゆったりしませんか??",
    text: "",
    images: [
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210835488_333746528206564_4270119861468804611_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QbTSkgFSFqQAX8Py7au&edm=AP_V10EBAAAA&ccb=7-4&oh=dcdb8e2c31ece5f19f29449e2a04fb30&oe=60F74D38&_nc_sid=4f375e",
      "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210835488_333746528206564_4270119861468804611_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=QbTSkgFSFqQAX8Py7au&edm=AP_V10EBAAAA&ccb=7-4&oh=dcdb8e2c31ece5f19f29449e2a04fb30&oe=60F74D38&_nc_sid=4f375e",
    ],
    coupon: false,
    distance: 500,
    url: null,
    instagram: "https://www.instagram.com/rik0999/",
    twitter: "https://twitter.com/V44Qt5u9ExgcXut",
    address: "",
    lat: 1,
    lng: 1,
  },
];

export const Posts = React.memo(() => {
  const navigation = useNavigation<PostsNavigationProp<"list">>();

  const onItemPress = useCallback(() => {
    navigation.navigate("detail");
  }, []);

  const { data, loading } = useGetPosts();

  const listData: Recommendation | undefined = useMemo(() => {
    if (data) {
      return data.map((r) => {
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
    }
  }, [data]);

  return (
    <View style={styles.container}>
      {listData ? (
        <RecommendationList listData={listData} onItemPress={onItemPress} />
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});

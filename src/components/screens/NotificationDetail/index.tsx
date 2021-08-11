import React from "react";
import { View, StyleSheet, FlatList, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { useRoute, RouteProp } from "@react-navigation/native";

import { NotificationStackParamList } from "~/navigations/Notifications";

export const NotificationDetail = React.memo(() => {
  const { id, title, createdAt } =
    useRoute<RouteProp<NotificationStackParamList, "Detail">>().params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contents}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.timestamp}>{createdAt}</Text>
        <Divider style={styles.divider} />
        <Text style={styles.text}>
          いつも本サービスをご利用いただきありがとうございます。
          このたび、投稿方法が変更れました。 {`\n`}
          主な変更内容は以下の通りです。
          {`\n`}
          {`\n`}
          React
          は、インタラクティブなユーザインターフェイスの作成にともなう苦痛を取り除きます。アプリケーションの各状態に対応するシンプルな
          View を設計するだけで、React
          はデータの変更を検知し、関連するコンポーネントだけを効率的に更新、描画します。
          宣言的な View
          を用いてアプリケーションを構築することで、コードはより見通しが立ちやすく、デバッグのしやすいものになります。
          React
          は、インタラクティブなユーザインターフェイスの作成にともなう苦痛を取り除きます。アプリケーションの各状態に対応するシンプルな
          View を設計するだけで、React
          はデータの変更を検知し、関連するコンポーネントだけを効率的に更新、描画します。
          宣言的な View
          を用いてアプリケーションを構築することで、コードはより見通しが立ちやすく、デバッグのしやすいものになります。
          React
          は、インタラクティブなユーザインターフェイスの作成にともなう苦痛を取り除きます。アプリケーションの各状態に対応するシンプルな
          View を設計するだけで、React
          はデータの変更を検知し、関連するコンポーネントだけを効率的に更新、描画します。
          宣言的な View
          を用いてアプリケーションを構築することで、コードはより見通しが立ちやすく、デバッグのしやすいものになります。
          React
          は、インタラクティブなユーザインターフェイスの作成にともなう苦痛を取り除きます。アプリケーションの各状態に対応するシンプルな
          View を設計するだけで、React
          はデータの変更を検知し、関連するコンポーネントだけを効率的に更新、描画します。
          宣言的な View
          を用いてアプリケーションを構築することで、コードはより見通しが立ちやすく、デバッグのしやすいものになります。
          React
          は、インタラクティブなユーザインターフェイスの作成にともなう苦痛を取り除きます。アプリケーションの各状態に対応するシンプルな
          View を設計するだけで、React
          はデータの変更を検知し、関連するコンポーネントだけを効率的に更新、描画します。
          宣言的な View
          を用いてアプリケーションを構築することで、コードはより見通しが立ちやすく、デバッグのしやすいものになります。
        </Text>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  contents: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 20,
  },
  timestamp: {
    color: "gray",
    marginTop: 30,
  },
  divider: {
    marginTop: 10,
  },
  text: {
    marginTop: 30,
    lineHeight: 19,
  },
});

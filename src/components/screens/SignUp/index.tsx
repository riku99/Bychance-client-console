import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import { InputSignupToken } from "./InputSignupToken";

export const SignUp = React.memo(() => {
  const [enabledSignup, setEnabledSignup] = useState(false);

  return (
    <View style={styles.container}>
      <InputSignupToken setEnabledSignup={setEnabledSignup} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

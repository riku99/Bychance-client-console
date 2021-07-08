import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import { InputSignupToken } from "./InputSignupToken";
import { Signin } from "./Signin";

export const SignUp = React.memo(() => {
  const [enabledSignup, setEnabledSignup] = useState(false);

  return (
    <View style={styles.container}>
      {enabledSignup ? (
        <Signin />
      ) : (
        <InputSignupToken setEnabledSignup={setEnabledSignup} />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

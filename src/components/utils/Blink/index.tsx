import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";

type Props = {
  onAnimationEnd: () => void;
  children: Element;
  duration: number;
  iterations: number;
};

export const Blink = React.memo(
  ({ children, onAnimationEnd, duration, iterations }: Props) => {
    const value = useRef(new Animated.Value(1)).current;
    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(value, {
            toValue: 0,
            duration,
            useNativeDriver: false,
          }),
          Animated.timing(value, {
            toValue: 1,
            duration,
            useNativeDriver: false,
          }),
        ]),
        {
          iterations,
        }
      ).start(() => {
        onAnimationEnd();
      });
    }, []);

    return <Animated.View style={{ opacity: value }}>{children}</Animated.View>;
  }
);

import React, { useRef, useEffect } from "react";
import { View, Animated, StyleProp, ViewStyle } from "react-native";

type Props = {
  onAnimationEnd: () => void;
  children: Element;
  duration: number;
  iterations: number;
  styles?: StyleProp<ViewStyle>;
  isVisible: boolean;
};

export const Blink = React.memo(
  ({
    children,
    onAnimationEnd,
    duration,
    iterations,
    styles,
    isVisible,
  }: Props) => {
    const value = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(value, {
            toValue: 1,
            duration,
            useNativeDriver: false,
          }),
          Animated.timing(value, {
            toValue: 0,
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

    return (
      <>
        {isVisible && (
          <Animated.View style={[styles, { opacity: value }]}>
            {children}
          </Animated.View>
        )}
      </>
    );
  }
);

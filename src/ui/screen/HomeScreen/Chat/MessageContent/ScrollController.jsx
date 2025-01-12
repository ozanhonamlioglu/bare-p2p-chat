import { StyleSheet, Animated, Pressable } from 'react-native';
import React, { useCallback, useImperativeHandle, useRef, useState } from 'react';
import { cls } from 'ui/component/styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import colorFromPalette from 'ui/component/styles/palette';

/**
 *
 * @param {{ onPress: () => void }} _ any
 * @param {import('react').ForwardedRef<{controlVisibility: (status: boolean) => void}>} ref
 * @returns
 */
const ScrollControllerRef = ({ onPress }, ref) => {
  const [visible, setVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) setVisible(false);
    });
  }, []);

  useImperativeHandle(ref, () => ({
    controlVisibility: (status) => {
      if (status) {
        setVisible(true);
        fadeIn();
      } else {
        fadeOut();
      }
    },
  }));

  if (!visible) return null;
  return (
    <Pressable onPress={onPress}>
      <Animated.View style={cls('absolute', 'center', styles.content, { opacity: fadeAnim })}>
        <AntDesign name="arrowdown" size={16} color={colorFromPalette('neutral.50')} />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  content: {
    right: 10,
    bottom: 10,
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

const ScrollController = React.forwardRef(ScrollControllerRef);
export default ScrollController;

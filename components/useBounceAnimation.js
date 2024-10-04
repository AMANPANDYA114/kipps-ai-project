
import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const useBounceAnimation = () => {
  const bounceValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const bounce = () => {
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: 1.2,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start(() => bounce());
    };

    bounce();
  }, [bounceValue]);

  return bounceValue;
};

export default useBounceAnimation;

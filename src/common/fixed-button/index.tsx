import { StyleSheet, View } from 'react-native';
import React from 'react';

import { theme } from '../../theme';
import { Entypo } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
  withSequence,
} from 'react-native-reanimated';
import { IconContainer } from '../icon-container';

export default function FixedButton({ onPress }: { onPress(): void }) {
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    rotation.value = withRepeat(
      withSequence(
        withTiming(360, { duration: 3000 }),
        withDelay(3000, withTiming(0, { duration: 0 }))
      ),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <IconContainer onPress={onPress} color={theme.colors.primary} style={styles.iconContainer}>
        <Animated.View style={animatedStyle}>
          <Entypo name="plus" size={30} color={theme.colors.white} />
        </Animated.View>
      </IconContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  iconContainer: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

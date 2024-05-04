import { Animated, Dimensions, Pressable, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../../../theme';
import { AppInput } from '../../../common/app-input';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
// TODO: after building the expo-build-properties add the KeyboardGestureArea again.
// import { useKeyboardAnimation } from 'react-native-keyboard-controller';

type Props = {
  onSendMsg(msg: string): void;
};

export default function ChatInbox({ onSendMsg }: Props) {
  const { bottom } = useSafeAreaInsets();
  const [value, onChangeText] = useState('');
  // const { height, progress } = useKeyboardAnimation();

  // const scale = progress.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [1, 2],
  // });

  const handleSendMsg = () => {
    onSendMsg(value);
    onChangeText('');
  };

  return (
    <Animated.View
      style={[
        styles.inboxContainer,
        {
          // transform: [{ translateY: height }],
        },
      ]}>
      <AppInput
        value={value}
        onChangeText={onChangeText}
        multiline
        inputContainerStyle={{ marginBottom: 10 + bottom }}
        LeftIcon={() => (
          <Pressable onPress={handleSendMsg}>
            {value ? (
              <Feather name="send" size={28} color={theme.colors.primary} />
            ) : (
              <MaterialIcons name="keyboard-voice" size={28} color={theme.colors.primary} />
            )}
          </Pressable>
        )}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  inboxContainer: {
    minHeight: 100,
    backgroundColor: theme.colors.primary,
    justifyContent: 'flex-start',
    marginTop: 'auto',
  },
});

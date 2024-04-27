import { View, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

import { coverStyles as styles } from './styles';
import { theme } from '../../../theme';

export default function EventCover() {
  const { top } = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require('../../../assets/event-bg.png')}
      resizeMode="cover"
      style={styles.background}>
      <Pressable style={{ marginTop: 5 + top, marginLeft: 20 }}>
        <Text style={styles.whiteText} variant="headlineSmall">
          <AntDesign name="arrowleft" size={24} color={theme.colors.white} />
        </Text>
      </Pressable>
      <View style={styles.counterContainer}>
        {/* TODO: NEED To redo */}
        <Text style={styles.counterText}>12 : 05 : 30 </Text>
      </View>
    </ImageBackground>
  );
}

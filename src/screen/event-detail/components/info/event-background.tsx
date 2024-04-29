import { View, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { coverStyles as styles } from './styles';
import { theme } from '../../../../theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EventStackParams, EventStackParamsList } from '../../../../navigation/event-stack/type';

type Navigation = NativeStackNavigationProp<EventStackParamsList, EventStackParams>;

export default function EventCover() {
  const { top } = useSafeAreaInsets();

  const navigation = useNavigation<Navigation>();

  return (
    <ImageBackground
      source={require('../../../../assets/event-bg.png')}
      resizeMode="cover"
      style={styles.background}>
      <Pressable style={{ marginTop: 5 + top, marginLeft: 20 }} onPress={navigation.goBack}>
        <AntDesign name="arrowleft" size={24} color={theme.colors.white} />
      </Pressable>
      <View style={styles.counterContainer}>
        {/* TODO: NEED To redo */}
        <Text style={styles.counterText}>12 : 05 : 30 </Text>
      </View>
    </ImageBackground>
  );
}

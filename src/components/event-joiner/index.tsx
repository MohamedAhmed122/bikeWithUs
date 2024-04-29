import { View, Image, Pressable, ScrollView, StyleProp, ViewStyle } from 'react-native';
import React, { useState } from 'react';

import { Text } from 'react-native-paper';
import { joinerStyles as styles } from './styles';
import { User } from '../../types';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../../theme';

type Props = {
  joiners: User[];
  joinedCount: number;
  showSeeAll?: boolean;
  joinersCounterDisplay?: number;
  joinerContainerStyle?: StyleProp<ViewStyle>;
};

export default function EventJoiner({
  joiners,
  joinedCount,
  showSeeAll = false,
  joinerContainerStyle,
  joinersCounterDisplay = 5,
}: Props) {
  const [joinersCountDisplay, setJoinersCountDisplay] = useState(joinersCounterDisplay);

  const onShowMore = () =>
    showSeeAll &&
    setJoinersCountDisplay((j) =>
      joinersCounterDisplay === j ? joiners.length : joinersCounterDisplay
    );

  return (
    <View>
      {!showSeeAll && (
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.joinerText}>{joinedCount} JOINERS</Text>
          <View style={[styles.line, { marginLeft: 'auto' }]} />
        </View>
      )}
      <ScrollView
        contentContainerStyle={[styles.joinContainer, joinerContainerStyle]}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          {joiners.slice(0, joinersCountDisplay).map((item, index) => (
            <Image
              key={item.id}
              source={{ uri: item.image }}
              resizeMode="cover"
              style={[styles.avatar, { marginLeft: index !== 0 ? -15 : 0, width: 45, height: 45 }]}
            />
          ))}
        </View>
        {joiners.length > joinersCountDisplay && (
          <Pressable onPress={onShowMore} style={styles.showMoreContainer}>
            <AntDesign name="pluscircle" size={35} color={theme.colors.white} />
          </Pressable>
        )}
      </ScrollView>
      {showSeeAll && (
        <View style={styles.joinerFooter}>
          <Text style={styles.joinerFooterText}>
            <Text style={{ fontWeight: '800' }}>{joinedCount}</Text> People are going
          </Text>
          {joinersCountDisplay > joinersCounterDisplay && (
            <Pressable onPress={onShowMore} style={styles.showMoreText}>
              <Text style={{ color: theme.colors.darkGray }}>
                {joinersCountDisplay > joinersCounterDisplay ? 'Hide' : 'See all'}
              </Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
}

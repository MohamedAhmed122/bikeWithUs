import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import { askCardStyle as styles } from './style';
import { AskType } from '../../../../types';

interface Props {
  item: AskType;
  onAskCardPressed?(): void;
}

export const AskCard = ({ item, onAskCardPressed }: Props) => {
  const { user, description, title, date, id } = item;

  return (
    <TouchableOpacity style={styles.container} onPress={onAskCardPressed}>
      <View style={styles.main}>
        <View style={styles.flex}>
          <Image resizeMode="cover" style={styles.avatar} source={{ uri: user.image }} />
          <Text style={styles.username}> {user.name}</Text>
        </View>
        <View>
          <Text style={styles.dateStyle}>{date}</Text>
        </View>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.titleForAsk}>{title}</Text>
        <Text style={styles.desc} numberOfLines={4}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

import { View, Image } from 'react-native';
import React from 'react';

import { Text } from 'react-native-paper';
import { joinerStyles as styles } from './styles';
import { User } from '../../types';

type Props = {
  joiners: User[];
  joiners_count: number;
};

export default function EventJoiner({ joiners, joiners_count }: Props) {
  return (
    <View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.joinerText}>{joiners_count} JOINERS</Text>
        <View style={[styles.line, { marginLeft: 'auto' }]} />
      </View>
      <View style={styles.joinContainer}>
        <View style={styles.avatarContainer}>
          {joiners.slice(0, 6).map((item, index) => (
            <Image
              key={item.id}
              source={{ uri: item.image }}
              resizeMode="cover"
              style={[styles.avatar, { marginLeft: index !== 0 ? -15 : 0 }]}
            />
          ))}
        </View>
        {/* Add component */}
      </View>
    </View>
  );
}

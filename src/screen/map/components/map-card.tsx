// import { getDistance } from 'geolib';
import React from 'react';
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import { Avatar, Chip } from 'react-native-paper';
import { mapCardStyles as styles } from '../styles';
import { MaterialIcons } from '@expo/vector-icons';

import { Biker } from '../../../data/biker';
import { theme } from '../../../theme';
import { useNavigation } from '@react-navigation/native';
import { TabParams } from '../../../navigation/params';
import { ProfileStackParams } from '../../../navigation/profile-stack/type';

type Props = {
  item: Biker;
  selected: boolean;
  onPress(): void;
  onCancelPressed(): void;
  onJoinUserEvent(): void;
};

export function MapCard({ item, onPress, selected, onCancelPressed, onJoinUserEvent }: Props) {
  const navigation = useNavigation();

  const onNavigateToUserProfile = () => {
    // TODO:
    // @ts-ignore
    navigation.navigate(TabParams.profileStack, {
      screen: ProfileStackParams.profile,
      params: { user: item.user },
    });
  };
  return (
    <TouchableOpacity
      style={[styles.container, !selected && styles.unselectedContainer]}
      onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Pressable style={styles.userInfo} onPress={onNavigateToUserProfile}>
          <Avatar.Image source={{ uri: item.user?.image }} size={40} />
          <Text style={styles.username}>{item.user?.username}</Text>
        </Pressable>
        <Pressable onPress={onCancelPressed}>
          <MaterialIcons name="cancel" size={24} color={theme.colors.darkGray} />
        </Pressable>
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {item.user?.username} {item.text}
      </Text>

      <View style={styles.bottomRow}>
        <View>
          <Text style={styles.distanceText}>Distance: {item.miles}KM</Text>
          {!item.isSOS && <Text style={[styles.distanceText, { marginTop: 5 }]}>Start: now</Text>}
        </View>
        {item.joinable && (
          <Chip onPress={onJoinUserEvent} textStyle={styles.chipText}>
            Join
          </Chip>
        )}
        {item.isSOS && (
          <Chip
            // icon="access-point"
            onPress={onJoinUserEvent}
            textStyle={{ color: theme.colors.white }}
            style={{ backgroundColor: theme.colors.error }}>
            Help me
          </Chip>
        )}
      </View>
    </TouchableOpacity>
  );
}

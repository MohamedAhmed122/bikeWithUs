import React from 'react';
import { Text, View, TouchableOpacity, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { eventCardStyle as styles } from './styles';
import { useToggle } from '../../hooks/useToggle';
import { EventType } from '../../types';
import { theme } from '../../theme';
import ListIcon from '../../common/list-icon';
import EventJoiner from '../event-joiner';
import { GoingButton } from '../../common/going-button';
import { IconContainer } from '../../common/icon-container';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackParams } from '../../navigation/profile-stack/type';
import { TabParams } from '../../navigation/params';

interface Props {
  item: EventType;
  onEventCardPressed?(): void;
}

export default function EventCard({ item, onEventCardPressed }: Props) {
  const { value: isGoing, toggleButton: toggleGoingButton } = useToggle();
  const { value: isWatched, toggleButton: toggleWatchButton } = useToggle();

  const { user, description, title, address, date, id, joined, joinedUsers } = item;

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={onEventCardPressed}>
      <View style={styles.main}>
        <Pressable
          style={styles.flex}
          onPress={() =>
            // TODO:
            // @ts-ignore
            navigation.navigate(TabParams.profileStack, {
              screen: ProfileStackParams.profile,
              params: { user },
            })
          }>
          <Image
            resizeMode="cover"
            style={styles.avatar}
            source={{
              uri: user.image,
            }}
          />
          <Text style={styles.username}> {user.name}</Text>
        </Pressable>
        <IconContainer
          style={styles.iconContainer}
          onPress={toggleWatchButton}
          color={isWatched ? theme.colors.orange : theme.colors.lightGrey}>
          <FontAwesome name="bookmark" size={22} color={theme.colors.white} />
        </IconContainer>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.desc}>{title}</Text>
        <Text style={styles.desc} numberOfLines={2}>
          {description}
        </Text>
        <ListIcon listText={date} icon="calendar-month" />
        <ListIcon listText={address} icon="location-pin" />
      </View>
      <EventJoiner joiners={joinedUsers} joinedCount={joined} />
      <View style={styles.likeContainer}>
        <GoingButton isGoing={isGoing} toggleButton={toggleGoingButton} />
      </View>
    </TouchableOpacity>
  );
}

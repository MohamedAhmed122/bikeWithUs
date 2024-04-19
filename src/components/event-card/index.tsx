import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { eventCardStyle as styles } from './styles';
import { useToggle } from '../../hooks/useToggle';
import { EventType } from '../../types';
import { IconContainer } from '../icon-container';
import { theme } from '../../theme';
import ListIcon from '../list-icon';
import EventJoiner from '../event-joiner';
import { GoingButton } from '../going-button';

interface Props {
  item: EventType;
}

export default function EventCard({ item }: Props) {
  const { value: isGoing, toggleButton: toggleGoingButton } = useToggle();
  const { value: isWatched, toggleButton: toggleWatchButton } = useToggle();

  const { user, description, title, address, date, id, joined, joinedUsers } =
    item;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.main}>
        <View style={styles.flex}>
          <Image
            resizeMode="cover"
            style={styles.avatar}
            source={{ uri: user.image }}
          />
          <Text style={styles.username}> {user.name}</Text>
        </View>
        <IconContainer
          style={styles.iconContainer}
          onPress={toggleWatchButton}
          color={isWatched ? theme.colors.orange : theme.colors.lightGrey}
        >
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
      <EventJoiner joiners={joinedUsers} joiners_count={joined} />
      <View style={styles.likeContainer}>
        <GoingButton isGoing={isGoing} toggleButton={toggleGoingButton} />
      </View>
    </TouchableOpacity>
  );
}
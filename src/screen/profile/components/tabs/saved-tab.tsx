import { View } from 'react-native';
import React from 'react';
import { events } from '../../../../data/events';
import EventCard from '../../../../components/event-card';

export default function SavedTab() {
  const myEvents = events.slice(3, 4);
  return (
    <View style={{ flex: 1 }}>
      {myEvents.map((item) => (
        <EventCard key={item.id} item={item} />
      ))}
    </View>
  );
}

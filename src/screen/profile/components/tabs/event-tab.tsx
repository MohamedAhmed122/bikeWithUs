import { StyleSheet, View } from 'react-native';
import React from 'react';
import { events } from '../../../../data/events';
import EventCard from '../../../../components/event-card';

export default function EventTab() {
  const myEvents = events.slice(2, 4);
  return (
    <View style={{ flex: 1 }}>
      {myEvents.map((item) => (
        <EventCard key={item.id} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});

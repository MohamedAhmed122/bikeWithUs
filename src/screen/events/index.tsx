import { FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../theme';
import { events } from '../../data/events';
import EventCard from './components/event-card';
import { ActiveTab, EventTab } from './components/event-tab';

export default function Events() {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.UP_COMING);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <FlatList
        ListHeaderComponent={() => (
          <EventTab activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventCard item={item} />}
      />
    </SafeAreaView>
  );
}

import { FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import EventCard from '../../components/event-card';
import { theme } from '../../theme';
import { events } from '../../data/events';
import { Tab } from '../../components/tab';

const tabs = [
  {
    tabKey: 'UP_COMING',
    tabName: 'UP COMING',
  },
  {
    tabKey: 'PAST_EVENT',
    tabName: 'PAST',
  },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState(tabs[0].tabKey);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <FlatList
        ListHeaderComponent={() => (
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        )}
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventCard item={item} />}
      />
    </SafeAreaView>
  );
}

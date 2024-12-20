import { FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import EventCard from '../../components/event-card';
import { theme } from '../../theme';
import { events } from '../../data/events';
import { Tab } from '../../common/tab';
import FixedButton from '../../common/fixed-button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EventStackParams, EventStackParamsList } from '../../navigation/event-stack/type';
import { useNavigation } from '@react-navigation/native';
import useStore from '../../hooks/useStore';

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
type Navigation = NativeStackNavigationProp<EventStackParamsList, EventStackParams>;

export default function Events() {
  const [activeTab, setActiveTab] = useState(tabs[0].tabKey);
  const navigation = useNavigation<Navigation>();

  const { bears, nuts, increasePopulation } = useStore();
  console.log(bears, nuts, '===>bears');
  const onCreateButtonPressed = () => navigation.navigate(EventStackParams.createEvent);

  const onEventCardPressed = (id: string) =>
    navigation.navigate(EventStackParams.eventDetail, { id });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <FlatList
        ListHeaderComponent={() => (
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        )}
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard item={item} onEventCardPressed={() => onEventCardPressed(item.id)} />
        )}
      />
      {/* <FixedButton onPress={onCreateButtonPressed} /> */}
    </SafeAreaView>
  );
}

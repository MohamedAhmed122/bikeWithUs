import { FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import EventCard from '../../components/event-card';
import { theme } from '../../theme';
import { events } from '../../data/events';
import { Tab } from '../../common/tab';
import FixedButton from '../../common/fixed-button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  EventStackParams,
  EventStackParamsList,
} from '../../navigation/event-stack/type';
import { useNavigation } from '@react-navigation/native';

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
type Navigation = NativeStackNavigationProp<
  EventStackParamsList,
  EventStackParams
>;

export default function Events() {
  const [activeTab, setActiveTab] = useState(tabs[0].tabKey);
  const navigation = useNavigation<Navigation>();

  const onCreateButtonPressed = () =>
    navigation.navigate(EventStackParams.createEvent);

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
      <FixedButton onPress={onCreateButtonPressed} />
    </SafeAreaView>
  );
}

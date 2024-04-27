import { ScrollView } from 'react-native';
import React from 'react';

import { events } from '../../data/events';
import EventCover from './components/event-background';
import EventDetailInfo from './components/event-detail-info';
import EventJoiner from '../../components/event-joiner';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabParams, TabParamsList } from '../../navigation/params';
import EventFooter from './components/event-footer';

type Navigation = NativeStackNavigationProp<TabParamsList, TabParams.profileStack>;
export default function EventDetail({ navigation }: { navigation: Navigation }) {
  // https://i.pinimg.com/originals/0b/fa/33/0bfa33d0a891669ceb3b362834c3fedd.png
  const event = events[0];

  return (
    <React.Fragment>
      <ScrollView>
        <EventCover />
        <EventDetailInfo />
        <EventJoiner
          joiners={event.joinedUsers}
          joinedCount={event.joined}
          joinersCounterDisplay={6}
          JoinerContainerStyle={{ marginLeft: 30, marginTop: 10, paddingRight: 40 }}
          showSeeAll
        />
      </ScrollView>
      <EventFooter />
    </React.Fragment>
  );
}

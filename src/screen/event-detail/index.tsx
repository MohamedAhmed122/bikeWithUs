import { ScrollView } from 'react-native';
import React, { useState } from 'react';

import { events } from '../../data/events';
import EventCover from './components/info/event-background';
import EventDetailInfo from './components/info/event-detail-info';
import EventJoiner from '../../components/event-joiner';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabParams, TabParamsList } from '../../navigation/params';
import EventFooter from './components/info/event-footer';

import { Tab } from '../../common/tab';
import EventMap from './components/info/event-map';
import { ScaledSheet } from 'react-native-size-matters';
import Feed from './components/feed';
// https://i.pinimg.com/originals/0b/fa/33/0bfa33d0a891669ceb3b362834c3fedd.png

const event = events[0];

export enum EventDetailTabsType {
  FEED = 'FEED',
  DETAILS = 'DETAILS',
}

const tabs = [
  {
    tabKey: EventDetailTabsType.DETAILS,
    tabName: 'Details',
  },
  {
    tabKey: EventDetailTabsType.FEED,
    tabName: 'Feed',
  },
];

type Navigation = NativeStackNavigationProp<TabParamsList, TabParams.profileStack>;

export default function EventDetail({ navigation }: { navigation: Navigation }) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].tabKey);
  return (
    <React.Fragment>
      <ScrollView>
        <EventCover />
        <EventDetailInfo />
        <EventJoiner
          joiners={event.joinedUsers}
          joinedCount={event.joined}
          joinersCounterDisplay={6}
          joinerContainerStyle={styles.joinerContainerStyle}
          showSeeAll
        />
        <Tab
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabContainerStyle={{ marginBottom: 0 }}
        />
        {activeTab === EventDetailTabsType.DETAILS && <EventMap />}
        {activeTab === EventDetailTabsType.FEED && <Feed />}
      </ScrollView>
      <EventFooter activeTab={activeTab} />
    </React.Fragment>
  );
}

const styles = ScaledSheet.create({
  joinerContainerStyle: {
    marginLeft: '30@ms',
    marginTop: '10@mvs',
    paddingRight: '40@ms',
  },
});

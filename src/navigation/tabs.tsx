import React from 'react';

import { scale } from 'react-native-size-matters';
import { MaterialIcons } from '@expo/vector-icons';
import EventStack from './event-stack';
import ProfileStack from './profile-stack';
import MapStack from './map-stack';
import ChatStack from './chat-stack';
import ReportStack from './report-stack';
import { TabBarIcon } from '../components/tab-bar-icon';
import { Ionicons } from '@expo/vector-icons';
import { TabParams } from './params';

export const tabs = [
  {
    id: 1,
    component: EventStack,
    name: TabParams.eventStack,
    options: {
      title: 'EVENTS',
      tabBarIcon: ({ color }: { color: string }) => (
        <MaterialIcons name="event-note" size={scale(27)} color={color} />
      ),
    },
  },
  {
    id: 2,
    component: ReportStack,
    name: TabParams.reportStack,
    options: {
      title: 'REPORT',
      tabBarIcon: ({ color }: { color: string }) => (
        <MaterialIcons name="article" size={scale(27)} color={color} />
      ),
    },
  },

  {
    id: 3,
    component: MapStack,
    name: TabParams.mapStack,
    options: {
      title: '',
      tabBarIcon: () => {
        return <TabBarIcon />;
      },
    },
  },
  {
    id: 4,
    component: ChatStack,
    name: TabParams.chatStack,
    options: {
      title: 'CHAT',
      tabBarIcon: ({ color }: { color: string }) => (
        <Ionicons name="chatbox-ellipses" size={29} color={color} />
      ),
    },
  },
  {
    id: 5,
    component: ProfileStack,
    name: TabParams.profileStack,
    options: {
      title: 'PROFILE',
      tabBarIcon: ({ color }: { color: string }) => (
        <MaterialIcons name="person-pin" size={scale(29)} color={color} />
      ),
    },
  },
];

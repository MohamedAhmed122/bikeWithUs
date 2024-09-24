import { MaterialIcons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from 'react';
import { scale } from 'react-native-size-matters';

import ChatStack from './chat-stack';
import EventStack from './event-stack';
import { EventStackParams } from './event-stack/type';
import MapStack from './map-stack';
import { TabParams } from './params';
import ProfileStack from './profile-stack';
import AskStack from './ask-stack';
import { ChatIcon } from '../assets/svg/chat-icon';
import UserIcon from '../assets/svg/user-icon';
import { TabBarIcon } from '../components/tab-bar-icon';
import { ChatStackParams } from './chat-stack/type';
import { AskStackParams } from './ask-stack/type';

// TODO: add ts
export const tabs = [
  {
    id: 1,
    component: EventStack,
    name: TabParams.eventStack,
    options: (route: any) => {
      const hideTab = getFocusedRouteNameFromRoute(route.route) === EventStackParams.eventDetail;
      return {
        title: 'EVENTS',
        tabBarStyle: { display: hideTab ? 'none' : 'flex' },
        tabBarIcon: ({ color }: { color: string }) => (
          <MaterialIcons name="event-note" size={scale(27)} color={color} />
        ),
      };
    },
  },
  {
    id: 2,
    component: AskStack,
    name: TabParams.askStack,
    options: (route: any) => {
      const hideTab = getFocusedRouteNameFromRoute(route.route) === AskStackParams.askDetail;
      return {
        title: 'REPORT',
        tabBarStyle: { display: hideTab ? 'none' : 'flex' },
        tabBarIcon: ({ color }: { color: string }) => (
          <MaterialIcons name="article" size={scale(27)} color={color} />
        ),
      };
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

    options: (route: any) => {
      const hideTab = getFocusedRouteNameFromRoute(route.route) === ChatStackParams.chat;
      return {
        title: 'CHAT',
        tabBarIcon: ({ color }: { color: string }) => <ChatIcon color={color} />,
        tabBarStyle: { display: hideTab ? 'none' : 'flex' },
      };
    },
  },

  {
    id: 5,
    component: ProfileStack,
    name: TabParams.profileStack,
    options: {
      title: 'PROFILE',
      tabBarIcon: ({ color }: { color: string }) => <UserIcon size={scale(22)} color={color} />,
    },
  },
];

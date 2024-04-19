import { NavigatorScreenParams } from '@react-navigation/native';
import { MapStackParamsList } from './map-stack/type';
import { ChatStackParamsList } from './chat-stack/type';
import { EventStackParamsList } from './event-stack/type';
import { ReportStackParamsList } from './report-stack/type';
import { ProfileStackParamsList } from './profile-stack/type';

export enum TabParams {
  mapStack = 'mapStack',
  chatStack = 'chatStack',
  eventStack = 'eventStack',
  reportStack = 'reportStack',
  profileStack = 'profileStack',
}

export type TabParamsList = {
  mapStack: NavigatorScreenParams<MapStackParamsList>;
  chatStack: NavigatorScreenParams<ChatStackParamsList>;
  eventStack: NavigatorScreenParams<EventStackParamsList>;
  reportStack: NavigatorScreenParams<ReportStackParamsList>;
  profileStack: NavigatorScreenParams<ProfileStackParamsList>;
};

export type NO_PARAMS = undefined;

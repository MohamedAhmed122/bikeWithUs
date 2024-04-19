import { NO_PARAMS } from '../params';

export enum EventStackParams {
  events = 'events',
  createEvent = 'createEvent',
  eventDetail = 'eventDetail',
}

export type EventStackParamsList = {
  [EventStackParams.events]: NO_PARAMS;
  [EventStackParams.createEvent]: NO_PARAMS;
  [EventStackParams.eventDetail]: { id: string };
};

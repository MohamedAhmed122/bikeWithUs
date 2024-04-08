type NO_PARAMS = undefined;

export type ProfileStackParams = {
  profile: NO_PARAMS;
  createProfile: NO_PARAMS;
};

export type EventStackParams = {
  events: NO_PARAMS;
  createEvent: NO_PARAMS;
};

export type TabParams = {
  eventStack: EventStackParams;
  profileStack: ProfileStackParams;
};

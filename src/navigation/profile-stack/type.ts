import { NO_PARAMS } from '../params';

export enum ProfileStackParams {
  profile = 'profile',
  createProfile = 'createProfile',
  bike = 'bike',
  editProfile = 'editProfile',
}

export type ProfileStackParamsList = {
  [ProfileStackParams.profile]: NO_PARAMS;
  [ProfileStackParams.createProfile]: NO_PARAMS;
  [ProfileStackParams.bike]: { id: string };
};

// https://reactnavigation.org/docs/typescript/
export type ProfileParamsList = {
  profile: NO_PARAMS;
  createProfile: NO_PARAMS;
  bike: { id: string };
  editProfile: NO_PARAMS;
};

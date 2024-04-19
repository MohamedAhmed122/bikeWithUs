import { NO_PARAMS } from '../params';

export enum ProfileStackParams {
  profile = 'profile',
  createProfile = 'createProfile',
  bike = 'bike',
}

export type ProfileStackParamsList = {
  [ProfileStackParams.profile]: NO_PARAMS;
  [ProfileStackParams.createProfile]: NO_PARAMS;
  [ProfileStackParams.bike]: { id: string };
};

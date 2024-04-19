import { NO_PARAMS } from '../params';

export enum MapStackParams {
  map = 'map',
}

export type MapStackParamsList = {
  [MapStackParams.map]: NO_PARAMS;
};

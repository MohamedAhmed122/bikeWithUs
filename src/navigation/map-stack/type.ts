import { NO_PARAMS } from '../params';

export enum MapStackParams {
  map = 'map',
  mapDirections = 'mapDirections',
}

export type MapStackParamsList = {
  [MapStackParams.map]: NO_PARAMS;
  [MapStackParams.mapDirections]: { latitude: number; longitude: number };
};

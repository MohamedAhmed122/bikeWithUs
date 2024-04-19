import { NO_PARAMS } from '../params';

export enum ChatStackParams {
  chat = 'chat',
}

export type ChatStackParamsList = {
  [ChatStackParams.chat]: NO_PARAMS;
};

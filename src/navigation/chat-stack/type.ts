import { NO_PARAMS } from '../params';

export enum ChatStackParams {
  chatList = 'chatList',
  chat = 'chat',
}

export type ChatStackParamsList = {
  [ChatStackParams.chatList]: NO_PARAMS;
  [ChatStackParams.chat]: { id: string };
};

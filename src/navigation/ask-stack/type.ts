import { NO_PARAMS } from '../params';

export enum AskStackParams {
  ask = 'ask',
  createAsk = 'createAsk',
  askDetail = 'askDetail',
}

export type AskStackParamsList = {
  [AskStackParams.ask]: NO_PARAMS;
  [AskStackParams.createAsk]: NO_PARAMS;
  [AskStackParams.askDetail]: { id: string };
};

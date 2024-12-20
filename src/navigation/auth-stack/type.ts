import { NO_PARAMS } from '../params';

export enum AuthStackParams {
  phone = 'phone',
  codeConfirmation = 'codeConfirmation',
}

export type AuthStackParamsList = {
  [AuthStackParams.phone]: NO_PARAMS;
  [AuthStackParams.codeConfirmation]: { phone: string };
};

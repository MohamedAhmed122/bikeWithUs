import { NO_PARAMS } from '../params';

export enum ReportStackParams {
  report = 'report',
}

export type ReportStackParamsList = {
  [ReportStackParams.report]: NO_PARAMS;
};

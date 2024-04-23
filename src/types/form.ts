export interface CreateEventValue {
  title: string;
  startTime?: Date;
  endTime?: Date;
  date?: Date;
  desc: string;
  locations: string;
  maxNumber: number;
}

export type InitialValueType = CreateEventValue;

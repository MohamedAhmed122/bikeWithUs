export type Nullable<T> = T | null | undefined;

export interface PickerItemType {
  id: number | string;
  label: string;
  icon: Nullable<string>;
  color: string;
}

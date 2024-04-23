import DateTimePicker from '@react-native-community/datetimepicker';

import React from 'react';
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

interface Props {
  date: Date;
  maximumDate: Date;
  minimumDate: Date;
  onChange: (date: Date) => void;
  onClose: () => void;
  mode?: 'time' | 'date';
}

const AppDatePicker = ({
  date,
  minimumDate,
  maximumDate,
  onChange,
  onClose,
  mode = 'date',
}: Props) => (
  <DateTimePicker
    is24Hour
    value={date}
    maximumDate={maximumDate}
    minimumDate={minimumDate}
    mode={mode}
    display="spinner"
    minuteInterval={10}
    onChange={(_e, _date) => {
      // handle 'Cancel' or "ok" button on android
      if (isAndroid) {
        onClose();
      }
      if (_date) {
        onChange(_date);
      }
    }}
  />
);

export default AppDatePicker;

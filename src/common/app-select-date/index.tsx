import { View } from 'react-native';
import React, { useState } from 'react';
import moment from 'moment';
import { AppInput } from '../app-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type Props = {
  date: Date;
  setDate(d: Date): void;
};
export default function AppSelectDate({ setDate, date }: Props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);

  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    setDate(date);
  };

  return (
    <View>
      <AppInput
        leftIconName="down"
        rightIconName="calendar"
        placeholder="Select Date"
        onPressIn={showDatePicker}
        value={date ? moment(date).format('DD.MM.YYYY') : ''}
      />
      <DateTimePickerModal
        date={date}
        isVisible={isDatePickerVisible}
        mode={'date'}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={moment().toDate()}
        maximumDate={moment().add(1, 'years').toDate()}
      />
    </View>
  );
}

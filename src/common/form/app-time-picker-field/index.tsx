import React from 'react';
import { FormikContextType, useFormikContext } from 'formik';
import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';
import AppSelectTime from '../../app-select-time';
import { Text } from 'react-native-paper';

export const AppTimePickerField = () => {
  const {
    setFieldValue,
    values,
    errors,
    touched,
  }: FormikContextType<{ startTime: Date; endTime: Date }> = useFormikContext();

  const setStartTime = (startTime: Date) => {
    setFieldValue('startTime', startTime);
  };

  const setEndTime = (endTime: Date) => {
    setFieldValue('endTime', endTime);
  };

  return (
    <>
      <AppSelectTime
        setStartTime={setStartTime}
        setEndTime={setEndTime}
        startTime={values['startTime']}
        endTime={values['endTime']}
      />
      {errors['startTime'] && touched['startTime'] && (
        <Text style={styles.error}>{errors['startTime'] as string}</Text>
      )}
      {errors['endTime'] && touched['endTime'] && (
        <Text style={styles.error}>{errors['endTime'] as string}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: theme.colors.danger,
    margin: 10,
  },
});

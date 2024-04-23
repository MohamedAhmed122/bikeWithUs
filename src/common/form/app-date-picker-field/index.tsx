import React from 'react';
import { FormikContextType, useFormikContext } from 'formik';
import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';
import { Text } from 'react-native-paper';
import AppSelectDate from '../../app-select-date';

export const AppDatePickerField = () => {
  const { setFieldValue, values, errors, touched }: FormikContextType<{ date: Date }> =
    useFormikContext();

  const setDate = (date: Date) => setFieldValue('date', date);

  return (
    <>
      <AppSelectDate date={values['date']} setDate={setDate} />
      {errors['date'] && touched['date'] && (
        <Text style={styles.error}>{errors['date'] as string}</Text>
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

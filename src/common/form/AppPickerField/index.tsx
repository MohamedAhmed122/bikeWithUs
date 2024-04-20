import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FormikContextType, useFormikContext } from 'formik';
import { AppPicker } from '../../app-picker';
import { theme } from '../../../theme';
import { PickerItemType } from '../../../types/common';

interface Props {
  name: string;
  placeholder: string;
  inverted?: boolean;
  items: Array<PickerItemType>;
}

export const AppPickerField: React.FC<Props> = ({
  name,
  items,
  placeholder,
  inverted,
}) => {
  const { errors, setFieldValue, values, touched }: FormikContextType<any> =
    useFormikContext();

  console.log(errors);
  return (
    <>
      <AppPicker
        placeholder={placeholder}
        setSelectedItem={(item) => setFieldValue(name, item)}
        items={items}
        selectedItem={values[name]}
        inverted={inverted}
      />
      {errors[name] && touched[name] && (
        // @ts-expect-error
        <Text style={styles.error}>{errors[name]}</Text>
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

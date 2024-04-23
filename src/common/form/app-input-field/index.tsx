import React from 'react';
import { FormikContextType, useFormikContext } from 'formik';

import { Text, StyleSheet, TextInputProps, StyleProp, ViewStyle } from 'react-native';
import { AppInput, AppTextInputProps } from '../../app-input';
import { theme } from '../../../theme';
import { InitialValueType } from '../../../types/form';

interface Props extends AppTextInputProps {
  name: keyof InitialValueType;
  inputContainerStyle?: StyleProp<ViewStyle>;
}

export const AppInputField: React.FC<Props> = ({ name, inputContainerStyle, ...otherProps }) => {
  const {
    setFieldValue,
    values,
    errors,
    setFieldTouched,
    touched,
  }: FormikContextType<InitialValueType> = useFormikContext();
  return (
    <>
      <AppInput
        inputContainerStyle={inputContainerStyle}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name] as string | undefined}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      {errors[name] && touched[name] && <Text style={styles.error}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: theme.colors.danger,
    margin: 10,
  },
});

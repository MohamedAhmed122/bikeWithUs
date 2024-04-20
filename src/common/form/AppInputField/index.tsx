import React from 'react';
import { FormikContextType, useFormikContext } from 'formik';

import {
  Text,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { AppInput } from '../../app-input';
import { theme } from '../../../theme';

interface Props extends TextInputProps {
  name: string;
  inputContainerStyle?: StyleProp<ViewStyle>;
}

export const AppInputField: React.FC<Props> = ({
  children,
  name,
  inputContainerStyle,
  ...otherProps
}) => {
  const {
    setFieldValue,
    values,
    errors,
    setFieldTouched,
    touched,
  }: FormikContextType<any> = useFormikContext();
  return (
    <>
      <AppInput
        inputContainerStyle={inputContainerStyle}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      >
        {children}
      </AppInput>
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

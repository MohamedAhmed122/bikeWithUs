import React from 'react';
import { Formik } from 'formik';
import { InitialValueType } from '../../../types/form';
// import {initialFormValues} from '@Types/Form';

interface Props {
  initialValues: InitialValueType;
  validationSchema: any;
  onSubmit: (values: InitialValueType) => void;
  children: JSX.Element;
}

export const AppForm: React.FC<Props> = ({
  initialValues,
  validationSchema,
  children,
  onSubmit,
}) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({}) => <>{children}</>}
    </Formik>
  );
};

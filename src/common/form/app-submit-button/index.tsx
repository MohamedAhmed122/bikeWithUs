import React from 'react';
import { useFormikContext } from 'formik';
import { AppButton, AppButtonProps } from '../../app-button';

interface Props extends Omit<AppButtonProps, 'onPress'> {}

export const AppSubmitButton: React.FC<Props> = ({
  title,
  color,
  style,
  isLoading,
  isDisabled,
}) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      color={color}
      style={style}
      onPress={handleSubmit}
      isLoading={isLoading}
      isDisabled={isDisabled}
    />
  );
};

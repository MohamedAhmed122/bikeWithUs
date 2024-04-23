import React from 'react';
import { StyleProp, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { theme } from '../../theme';

export interface AppTextInputProps extends TextInputProps {
  inputContainerStyle?: StyleProp<ViewStyle>;
  rightIconName?: keyof typeof AntDesign.glyphMap;
  leftIconName?: keyof typeof AntDesign.glyphMap;
}

export const AppInput: React.FC<AppTextInputProps> = ({
  inputContainerStyle,
  rightIconName,
  leftIconName,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, inputContainerStyle]}>
      {rightIconName && <AntDesign name={rightIconName} color={theme.colors.darkGray} size={20} />}
      <TextInput
        {...otherProps}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputText}
        placeholderTextColor={theme.colors.darkGray}
      />
      {leftIconName && <AntDesign name={leftIconName} color={theme.colors.darkGray} size={18} />}
    </View>
  );
};

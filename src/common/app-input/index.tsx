import React from 'react';
import { StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { theme } from '../../theme';

export interface AppTextInputProps extends Omit<TextInputProps, 'style'> {
  inputContainerStyle?: StyleProp<ViewStyle>;
  rightIconName?: keyof typeof AntDesign.glyphMap;
  leftIconName?: keyof typeof AntDesign.glyphMap;
  LeftIcon?: React.FC;
  inputStyle?: StyleProp<TextStyle>;
}

export const AppInput: React.FC<AppTextInputProps> = ({
  inputContainerStyle,
  rightIconName,
  LeftIcon,
  // leftIconName,
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
      {/* {leftIconName && <AntDesign name={leftIconName} color={theme.colors.darkGray} size={18} />} */}
      {LeftIcon && <LeftIcon />}
    </View>
  );
};

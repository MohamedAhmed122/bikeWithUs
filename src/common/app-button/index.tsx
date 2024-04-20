import React from 'react';

import { ActivityIndicator, StyleProp, Text, ViewStyle } from 'react-native';
import styles from './styles';
import { PressableScale } from '../pressable-scale';
import { theme } from '../../theme';

export interface AppButtonProps {
  title: string;
  color?: string;
  onPress(): void;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  color = theme.colors.primary,
  onPress,
  isLoading,
  isDisabled,
  style,
}) => {
  return (
    <PressableScale
      activeScale={0.9}
      onPress={onPress}
      disabled={isLoading || isDisabled}
      style={[
        styles.container,
        { backgroundColor: color, opacity: isLoading ? 0.6 : 1 },
        style,
      ]}
    >
      {isLoading && (
        <ActivityIndicator color={theme.colors.white} size={'small'} />
      )}
      {!isLoading && <Text style={styles.text}>{title}</Text>}
    </PressableScale>
  );
};

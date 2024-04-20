import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import styles from './styles';
import { theme } from '../../theme';

interface Props extends TouchableOpacityProps {
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export const IconContainer: React.FC<Props> = ({
  children,
  color = theme.colors.lightGrey,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, { backgroundColor: color }]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

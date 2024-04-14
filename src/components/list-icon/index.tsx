import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from 'react-native-paper';
import { theme } from '../../theme';

interface Props extends Omit<ViewProps, 'style'> {
  icon: keyof typeof MaterialIcons.glyphMap;
  listText: string;
  size?: number;
  color?: string;
  iconStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function ListIcon({
  icon,
  listText,
  size = 24,
  color = theme.colors.darkGray,
  iconStyle,
  containerStyle,
  ...otherProps
}: Props) {
  return (
    <View {...otherProps} style={[styles.container, containerStyle]}>
      <MaterialIcons style={iconStyle} size={size} color={color} name={icon} />
      <Text style={styles.text}>{listText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  text: {
    marginLeft: 10,
    color: theme.colors.darkGray,
  },
});

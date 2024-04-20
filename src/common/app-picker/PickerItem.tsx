import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { Nullable } from '../../types/common';

interface PickerProps {
  label: string;
  color: string;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress(): void;
}

export const PickerItem: React.FC<PickerProps> = ({ color, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color }]}>
        {icon && <MaterialCommunityIcons name={icon} size={35} color="white" />}
      </View>
    </TouchableOpacity>
  );
};

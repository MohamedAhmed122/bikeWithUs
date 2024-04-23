import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { theme } from '../../theme';
import { Text } from 'react-native-paper';

interface PickerProps {
  label: string;
  onPress(): void;
  color?: string;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  image?: string;
  selected: boolean;
}

export const PickerItem: React.FC<PickerProps> = ({
  color,
  icon,
  onPress,
  image,
  label,
  selected,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color ?? theme.colors.gray }]}>
        {icon && <MaterialCommunityIcons name={icon} size={35} color="white" />}
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <Text variant="bodyLarge" style={{ marginLeft: 10 }}>
          {label}
        </Text>
        {selected && (
          <View style={{ marginLeft: 'auto', marginRight: 10 }}>
            <MaterialCommunityIcons name={'check'} size={25} color="green" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

import { FontAwesome5 } from '@expo/vector-icons';
import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../theme';
import { TabParams, TabParamsList } from '../../navigation/params';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MapStackParams } from '../../navigation/map-stack/type';

type Navigation = NativeStackNavigationProp<TabParamsList, TabParams>;

export const TabBarIcon: React.FC = () => {
  const navigation = useNavigation<Navigation>();

  const handlePress = () =>
    navigation.navigate(TabParams.mapStack, { screen: MapStackParams.map });
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <FontAwesome5
        name="map-marked-alt"
        color={theme.colors.primary}
        size={scale(28)}
      />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
    top: '-5@s',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

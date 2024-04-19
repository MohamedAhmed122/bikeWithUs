import { Text, View } from 'react-native';
import React from 'react';
import { MapStackParams, MapStackParamsList } from './type';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<MapStackParamsList>();

export default function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={MapStackParams.map} component={Map} />
    </Stack.Navigator>
  );
}

function Map() {
  return (
    <View>
      <Text>map-stack</Text>
    </View>
  );
}

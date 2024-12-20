import React from 'react';
import { MapStackParams, MapStackParamsList } from './type';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../../screen/map';
import MapDirection from '../../screen/map-direction';

const Stack = createStackNavigator<MapStackParamsList>();

export default function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={MapStackParams.map}
        component={MapScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={MapStackParams.mapDirections}
        component={MapDirection}
      />
    </Stack.Navigator>
  );
}

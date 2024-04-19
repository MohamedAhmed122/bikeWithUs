import React from 'react';
import { ProfileStackParams, ProfileStackParamsList } from './type';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../screen/profile';
import CreateProfile from '../../screen/create-profile';
import Bike from '../../screen/bike';

const Stack = createStackNavigator<ProfileStackParamsList>();
export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ProfileStackParams.profile}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ProfileStackParams.createProfile}
        component={CreateProfile}
      />
      <Stack.Screen
        options={{
          presentation: 'modal',
        }}
        name={ProfileStackParams.bike}
        component={Bike}
      />
    </Stack.Navigator>
  );
}

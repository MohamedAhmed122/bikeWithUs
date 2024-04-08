import React from 'react';
import { ProfileStackParams } from './params';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screen/profile';
import CreateProfile from '../screen/create-profile';

const Stack = createStackNavigator<ProfileStackParams>();
export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="createProfile" component={CreateProfile} />
    </Stack.Navigator>
  );
}

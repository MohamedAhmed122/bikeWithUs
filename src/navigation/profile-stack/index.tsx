import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ProfileStackParams, ProfileStackParamsList } from './type';
import Bike from '../../screen/bike';
import CreateProfile from '../../screen/create-profile';
import EditProfile from '../../screen/edit-profile';
import Profile from '../../screen/profile';
import { theme } from '../../theme';

const Stack = createStackNavigator<ProfileStackParamsList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ProfileStackParams.profile}
        component={Profile}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: theme.colors.white },
        }}
      />
      <Stack.Screen
        name={ProfileStackParams.createProfile}
        component={CreateProfile}
        options={{}}
      />
      <Stack.Screen
        options={{
          presentation: 'modal',
        }}
        name={ProfileStackParams.bike}
        component={Bike}
      />
      <Stack.Screen
        name={ProfileStackParams.editProfile}
        options={{
          headerBackTitleVisible: false,
          title: 'Edit Profile',
        }}
        component={EditProfile}
      />
    </Stack.Navigator>
  );
}

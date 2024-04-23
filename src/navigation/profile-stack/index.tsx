import React from 'react';
import { ProfileStackParams, ProfileStackParamsList } from './type';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../screen/profile';
import CreateProfile from '../../screen/create-profile';
import Bike from '../../screen/bike';
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
    </Stack.Navigator>
  );
}

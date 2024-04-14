import React from 'react';
import { EventStackParams } from './params';
import { createStackNavigator } from '@react-navigation/stack';
import Events from '../screen/events';
import CreateEvents from '../screen/create-events';

const Stack = createStackNavigator<EventStackParams>();
export default function EventStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="events"
        component={Events}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="createEvent" component={CreateEvents} />
    </Stack.Navigator>
  );
}

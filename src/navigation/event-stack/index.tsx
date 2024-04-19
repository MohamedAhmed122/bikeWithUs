import React from 'react';
import { EventStackParams, EventStackParamsList } from './type';
import { createStackNavigator } from '@react-navigation/stack';
import Events from '../../screen/events';
import CreateEvents from '../../screen/create-events';
import EventDetail from '../../screen/event-detail';

const Stack = createStackNavigator<EventStackParamsList>();
export default function EventStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={EventStackParams.events}
        component={Events}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={EventStackParams.createEvent}
        component={CreateEvents}
      />
      <Stack.Screen
        name={EventStackParams.eventDetail}
        component={EventDetail}
      />
    </Stack.Navigator>
  );
}

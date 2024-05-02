import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { EventStackParams, EventStackParamsList } from './type';
import CreateEvents from '../../screen/create-events';
import EventDetail from '../../screen/event-detail';
import Events from '../../screen/events';
import { theme } from '../../theme';

const Stack = createStackNavigator<EventStackParamsList>();
export default function EventStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={EventStackParams.events} component={Events} />
      <Stack.Screen
        name={EventStackParams.createEvent}
        component={CreateEvents}
        options={{
          headerBackTitleVisible: false,
          headerShown: true,
          headerTitle: 'Create New Event',
          headerBackTitleStyle: { color: theme.colors.primary },
          cardStyle: { backgroundColor: theme.colors.white },
        }}
      />
      <Stack.Screen name={EventStackParams.eventDetail} component={EventDetail} />
    </Stack.Navigator>
  );
}

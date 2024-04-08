import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParams } from './params';
import EventStack from './event-stack';
import ProfileStack from './profile-stack';

const Tab = createBottomTabNavigator<TabParams>();

export default function Router() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="eventStack" component={EventStack} />
      <Tab.Screen name="profileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
}

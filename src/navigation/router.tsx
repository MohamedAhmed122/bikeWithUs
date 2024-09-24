import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamsList } from './params';
import { theme } from '../theme';
import { tabs } from './tabs';

const Tab = createBottomTabNavigator<TabParamsList>();

export default function Router() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.lightGrey,
        tabBarActiveTintColor: theme.colors.primary,
      }}>
      {tabs.map((tab) => (
        <Tab.Screen key={tab.id} name={tab.name} component={tab.component} options={tab.options} />
      ))}
    </Tab.Navigator>
  );
}

import { Text, View } from 'react-native';
import React from 'react';
import { AskStackParams, AskStackParamsList } from './type';

import { createStackNavigator } from '@react-navigation/stack';
import CreateAsk from '../../screen/create-ask';

import { Ask } from '../../screen/ask';
import AskDetails from '../../screen/ask-details';
import { theme } from '../../theme';

const Stack = createStackNavigator<AskStackParamsList>();

export default function AskStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AskStackParams.ask} component={Ask} />
      <Stack.Screen
        name={AskStackParams.createAsk}
        component={CreateAsk}
        options={{
          headerBackTitleVisible: false,
          headerShown: true,
          headerTitle: 'Create New Ask',
          headerBackTitleStyle: { color: theme.colors.primary },
          cardStyle: { backgroundColor: theme.colors.white },
        }}
      />
      <Stack.Screen name={AskStackParams.askDetail} component={AskDetails} />
    </Stack.Navigator>
  );
}

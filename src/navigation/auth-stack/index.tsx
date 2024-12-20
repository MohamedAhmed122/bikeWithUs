import React from 'react';
import { AuthStackParams, AuthStackParamsList } from './type';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../../theme';
import PhoneAuthentication from '../../screen/phone-authentication';
import CodeConfirmation from '../../screen/code-confirmation';

const Stack = createStackNavigator<AuthStackParamsList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AuthStackParams.phone} component={PhoneAuthentication} />
      <Stack.Screen
        name={AuthStackParams.codeConfirmation}
        component={CodeConfirmation}
        options={{
          cardStyle: { backgroundColor: theme.colors.white },
        }}
      />
    </Stack.Navigator>
  );
}

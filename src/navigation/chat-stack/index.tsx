import { Text, View } from 'react-native';
import React from 'react';
import { ChatStackParams, ChatStackParamsList } from './type';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<ChatStackParamsList>();

export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ChatStackParams.chat} component={Chat} />
    </Stack.Navigator>
  );
}

function Chat() {
  return (
    <View>
      <Text>chat</Text>
    </View>
  );
}

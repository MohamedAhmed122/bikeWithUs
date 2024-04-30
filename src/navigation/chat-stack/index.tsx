import { Text, View } from 'react-native';
import React from 'react';
import { ChatStackParams, ChatStackParamsList } from './type';
import { createStackNavigator } from '@react-navigation/stack';
import ChatList from '../../screen/chat-list';
import Chat from '../../screen/chat';

const Stack = createStackNavigator<ChatStackParamsList>();

export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ChatStackParams.chatList}
        component={ChatList}
      />
      <Stack.Screen name={ChatStackParams.chat} component={Chat} />
    </Stack.Navigator>
  );
}

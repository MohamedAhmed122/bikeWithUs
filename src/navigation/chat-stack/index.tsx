import React from 'react';
import { ChatStackParams, ChatStackParamsList } from './type';
import { createStackNavigator } from '@react-navigation/stack';
import ChatList from '../../screen/chat-list';
import Chat from '../../screen/chat';
import { theme } from '../../theme';

const Stack = createStackNavigator<ChatStackParamsList>();

export default function ChatStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ChatStackParams.chatList} component={ChatList} />
      <Stack.Screen
        name={ChatStackParams.chat}
        component={Chat}
        options={{
          cardStyle: { backgroundColor: theme.colors.white },
        }}
      />
    </Stack.Navigator>
  );
}

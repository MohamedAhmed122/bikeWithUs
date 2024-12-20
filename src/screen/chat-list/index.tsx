import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { chatData } from '../../data/chat';
import ChatUser from './components/chat-user';
import { theme } from '../../theme';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { ChatStackParams, ChatStackParamsList } from '../../navigation/chat-stack/type';
import { User } from '../../types';

type Navigation = NativeStackScreenProps<ChatStackParamsList, ChatStackParams>;

export default function ChatList({ navigation }: Navigation) {
  const onNavigateToChat = (user: User) => navigation.navigate(ChatStackParams.chat, { user });

  return (
    <View>
      <SafeAreaView />
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatUser item={item} onPress={() => onNavigateToChat(item.user)} />
        )}
        contentContainerStyle={{ marginHorizontal: 20, paddingBottom: 120 }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: theme.colors.white,
              width: '100%',
              marginVertical: 15,
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

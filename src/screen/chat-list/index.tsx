import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { chatData } from '../../data/chat';
import ChatUser from './components/chat-user';
import { theme } from '../../theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChatStackParams, ChatStackParamsList } from '../../navigation/chat-stack/type';

type Navigation = NativeStackNavigationProp<ChatStackParamsList, ChatStackParams>;

export default function ChatList({ navigation }: { navigation: Navigation }) {
  // https://in.pinterest.com/pin/701857923163333933/

  const onNavigateToChat = (id: string) => navigation.navigate(ChatStackParams.chat, { id });

  return (
    <View>
      <SafeAreaView />
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatUser item={item} onPress={() => onNavigateToChat(item.id)} />
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

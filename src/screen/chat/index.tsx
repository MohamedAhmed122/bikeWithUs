import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { messages } from '../../data/chat';
import ChatMessage from './components/chat-message';
import { Message } from '../../types/chat';
import moment from 'moment';
import ChatInbox from './components/chat-inbox';
import ChatHeader from './components/chat-header';

import Recorder from './Record';

export interface ExtendMsg extends Message {
  showAvatar: boolean;
  isSameSenderAsPrevious: boolean;
  isSameDate: boolean;
}

const preprocessMessages = (messages: Message[]) =>
  messages.map((message, index, arr) => ({
    ...message,
    showAvatar: index === 0 || arr[index - 1]?.user.id !== message.user.id,
    isSameSenderAsPrevious: index !== 0 && arr[index - 1].user.id === message.user.id,
    isSameDate: index === 0 || moment(arr[index - 1].date).isSame(message.date, 'day'),
  }));

export default function Chat() {
  const flatListRef = useRef<FlatList>(null);
  const [chatMsgs, setChatMsgs] = useState<ExtendMsg[]>(() => preprocessMessages(messages));

  useEffect(() => {
    setTimeout(() => {
      if (flatListRef?.current) {
        flatListRef?.current.scrollToIndex({
          index: chatMsgs.length - 1,
          animated: false,
          viewPosition: 1,
          viewOffset: -40,
        });
      }
    }, 200);
  }, []);

  const onSendMsg = (msg: string) => {
    const newMessage = {
      id: new Date().toISOString(),
      receiver: false,
      sender: true,
      msg: { msg },
      date: new Date(),
      user: {
        id: 'u2',
        name: 'Bob Smith',
        image:
          'https://media.istockphoto.com/id/1371797889/vector/young-smiling-man-avatar-3d-vector-people-character-illustration-cartoon-minimal-style-3d.jpg?s=612x612&w=0&k=20&c=WykJb6hyEUv8T9k86g-LG9u980sEwqK8FG1m1tXgnSI=',
      },
    };
    setChatMsgs((currentMsgs) => {
      const processedMessages = preprocessMessages([...currentMsgs, newMessage]);
      return processedMessages;
    });
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: chatMsgs.length - 1,
      });
    }, 100);
  };

  const renderItem: ListRenderItem<ExtendMsg> = ({ item }) => <ChatMessage msg={item} />;

  return (
    <React.Fragment>
      <ChatHeader />
      <FlatList
        ref={flatListRef}
        keyExtractor={(item) => item.id}
        data={chatMsgs}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <ChatInbox onSendMsg={onSendMsg} />
    </React.Fragment>
    // TODO: after building the expo-build-properties add the KeyboardGestureArea again.
    // <KeyboardGestureArea interpolator="ios">
    // </KeyboardGestureArea>
  );
}

const styles = StyleSheet.create({});

import { Pressable, View } from 'react-native';
import React from 'react';
import { ChatList } from '../../../types/chat';
import { Avatar, Text } from 'react-native-paper';
import moment from 'moment';
import { theme } from '../../../theme';
import { ScaledSheet } from 'react-native-size-matters';
import { FontAwesome6 } from '@expo/vector-icons';

type Props = {
  item: ChatList;
  onPress(): void;
};

export default function ChatUser({ item, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Avatar.Image source={{ uri: item.user.image }} size={60} />
      <View style={styles.innerContainer}>
        <View style={styles.nameMessageContainer}>
          <Text style={styles.nameText}>{item.user.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            {!!item.lastMsg.photo && (
              <View style={styles.imageIcon}>
                <FontAwesome6 name="images" size={20} color={theme.colors.primary} />
              </View>
            )}
            <Text style={styles.messageText}>
              {!!item.lastMsg?.msg ? item.lastMsg?.msg : 'image'}
            </Text>
          </View>
        </View>
        <View style={styles.timeUnreadContainer}>
          <Text style={styles.timeText}>{moment(item.lastMsgAt).format('hh:mmA')}</Text>
          {!!item.unreadMsgs && (
            <View style={styles.unreadMsgContainer}>
              <Text style={styles.unreadMsgText}>{item.unreadMsgs}</Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  nameMessageContainer: {
    marginLeft: '10@ms',
  },
  nameText: {
    color: theme.colors.primary,
    fontSize: '16@ms',
  },
  messageText: {
    fontWeight: '600',
    fontSize: '14@ms',
    marginTop: '5@mvs',
  },
  timeUnreadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: '11@ms',
    color: 'gray',
  },
  unreadMsgContainer: {
    alignSelf: 'center',
    marginTop: '5@mvs',
    width: '25@ms',
    height: '25@ms',
    borderRadius: '12.5@ms',
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadMsgText: {
    color: theme.colors.white,
    fontSize: '11@ms',
    fontWeight: '700',
  },
  imageIcon: {
    marginTop: 5,
    marginRight: 5,
  },
});

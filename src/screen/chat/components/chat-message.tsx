import { Text, View } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { theme } from '../../../theme';
import { ScaledSheet } from 'react-native-size-matters';
import moment from 'moment';
import { ExtendMsg } from '..';

type Props = {
  msg: ExtendMsg;
};

export default function ChatMessage({ msg }: Props) {
  return (
    <React.Fragment>
      {!msg.isSameDate && (
        <Text style={styles.dateText}>{moment(msg.date).format('DD/MM/YYYY')}</Text>
      )}
      <View
        style={[
          msg.receiver ? styles.receiverContainer : styles.senderContainer,
          { marginTop: msg.isSameSenderAsPrevious ? 0 : 16 },
        ]}>
        {msg.showAvatar ? (
          <Avatar.Image source={{ uri: msg.user.image }} size={50} />
        ) : (
          <View style={{ width: 50 }} />
        )}
        <View
          style={msg.receiver ? styles.receiverMessageContainer : styles.senderMessageContainer}>
          <Text style={msg.receiver ? styles.receiverMessageText : styles.senderMessageText}>
            {msg.msg?.msg}
          </Text>
          <Text style={msg.receiver ? styles.receiverTimeText : styles.senderTimeText}>10:12</Text>
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = ScaledSheet.create({
  dateText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 16,
  },
  // =========== receiver =========
  receiverContainer: {
    flexDirection: 'row',
    marginBottom: '5@mvs',
    marginRight: '70@ms',
  },
  receiverMessageContainer: {
    marginLeft: '10@ms',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: '20@ms',
    paddingVertical: '9@mvs',
    borderTopLeftRadius: '5@ms',
    borderTopRightRadius: '15@ms',
    borderBottomRightRadius: '2@ms',
  },
  receiverTimeText: {
    color: theme.colors.white,
    textAlign: 'right',
    fontSize: '10@ms',
    marginTop: 5,
  },
  receiverMessageText: {
    color: theme.colors.white,
    lineHeight: 20,
    fontWeight: '700',
  },

  //  ============= sender =============
  senderContainer: {
    flexDirection: 'row-reverse',
    marginBottom: '8@mvs',
    marginRight: '70@ms',
  },
  senderMessageContainer: {
    marginRight: '10@ms',
    backgroundColor: theme.colors.lightGray,
    paddingHorizontal: '20@ms',
    paddingVertical: '9@mvs',
    borderTopLeftRadius: '15@ms',
    borderTopRightRadius: '5@ms',
  },
  senderMessageText: {
    color: theme.colors.darkGray,
    lineHeight: 20,
    fontWeight: '700',
  },
  senderTimeText: {
    color: theme.colors.darkGray,
    textAlign: 'left',
    fontSize: '10@ms',
    marginTop: 5,
  },
});

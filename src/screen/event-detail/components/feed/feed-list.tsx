import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../../../theme';

export default function FeedList() {
  return (
    <View>
      <View style={styles.flex}>
        <Image
          resizeMode="cover"
          style={styles.avatar}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg',
          }}
        />
        <Text style={styles.username}> {'Mohamed Youssef'}</Text>
      </View>
      <Text style={styles.feedText}>
        Some feedback from each user that will help you to understand the event
      </Text>
    </View>
  );
}

const styles = ScaledSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: '40@s',
    height: '40@s',
    borderRadius: '20@s',
    margin: '5@s',
  },
  username: {
    fontSize: 18,
    color: theme.colors.primary,
  },
  feedText: {
    marginLeft: 10,
    marginBottom: 10,
  },
});

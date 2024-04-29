import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { AppInput } from '../../../../common/app-input';

export default function FeedInBox() {
  return (
    <AppInput
      leftIconName="rightcircle"
      placeholder="Write a feed"
      inputContainerStyle={styles.inbox}
    />
  );
}

const styles = StyleSheet.create({
  inbox: {
    marginBottom: 0,
    marginTop: -10,
  },
});

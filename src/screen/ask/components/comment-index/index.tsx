import React from 'react';
import { View, StyleSheet } from 'react-native';

import { AppInput } from '../../../../common/app-input';
import { theme } from '../../../../theme';

export default function CommentInBox() {
  return (
    <View style={styles.container}>
      <AppInput
        leftIconName="rightcircle"
        placeholder="Write a Comment"
        inputContainerStyle={styles.inbox}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inbox: {
    marginBottom: 20,
    marginTop: -10,
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: 90,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: theme.colors.white,
  },
});

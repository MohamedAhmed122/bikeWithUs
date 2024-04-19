import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';

import TabViewExample from './components/profile-tab';
import ProfileHeader from './components/profile-header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EventStackParams, ProfileStackParams } from '../../navigation/params';
type Props = NativeStackScreenProps<ProfileStackParams, 'profile'>;

export default function Profile() {
  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}
    >
      <ProfileHeader />
      <TabViewExample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
});

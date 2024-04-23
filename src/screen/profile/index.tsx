import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';

import TabViewExample from './components/profile-tab';
import ProfileHeader from './components/profile-header';

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
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

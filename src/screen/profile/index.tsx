import { Entypo } from '@expo/vector-icons';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar, Button, Title, Text } from 'react-native-paper';

import TabViewExample from './components/profile-tab';
import { TabParams } from '../../navigation/params';
import { ProfileParamsList, ProfileStackParams } from '../../navigation/profile-stack/type';
import { theme } from '../../theme';
import { users } from '../../data/users';
import { User } from '../../types';

type ProfileType = NativeStackScreenProps<ProfileParamsList, 'profile'>;

const Profile: React.FC<ProfileType> = ({ navigation, route }) => {
  const user = route.params?.user || users[12];

  const onEditProfile = React.useCallback(() => navigation.navigate('editProfile'), []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: 'white',
        }}
        showsVerticalScrollIndicator={false}>
        <UserProfile onEditProfile={onEditProfile} user={user} />
        <TabViewExample username={user.username} />
      </ScrollView>
    </SafeAreaView>
  );
};

interface UserProfileProps {
  onEditProfile(): void;
  user: User;
}
const UserProfile: React.FC<UserProfileProps> = ({ onEditProfile, user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avatarSection}>
          <Avatar.Image size={80} source={{ uri: user.image }} style={styles.avatar} />

          <ProfileSocialLinks />
        </View>
        <View style={{ paddingBottom: 32 }}>
          <Title style={styles.name}>{user.username}</Title>
          <Text style={styles.bio}>{user.bio}</Text>
        </View>

        <View style={styles.actions}>
          <Button
            onPressIn={onEditProfile}
            mode="contained"
            textColor="#000"
            style={styles.actionButton}>
            Edit profile
          </Button>
          <Button mode="contained" textColor="#000" style={styles.actionButton}>
            Share profile
          </Button>
        </View>
      </View>
    </View>
  );
};

export const ProfileSocialLinks = () => {
  const navigation = useNavigation<any>();

  const onNavigateToProfile = () =>
    navigation.navigate(TabParams.profileStack, {
      screen: ProfileStackParams.bike,
      params: { id: '' },
    });

  const onNavigateToInstagram = () =>
    Linking.openURL('https://www.instagram.com/mohameddesoukey98/');

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity style={styles.iconContainer} onPress={onNavigateToProfile}>
        <Text variant="headlineMedium"> 🚴🏿‍♂️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={onNavigateToInstagram}>
        <Entypo name="instagram" size={29} color={theme.colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    // backgroundColor: '#f5f5f5', // Assuming a light grey background
  },
  card: {
    elevation: 0, // Removes any shadow
  },
  avatarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    backgroundColor: '#c0c0c0', // Placeholder color
  },
  addIcon: {
    marginLeft: -20, // Adjust as necessary
  },
  name: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#191F33',
  },
  bio: {
    color: '#464D61',
  },
  statsSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  stats: {
    color: '#464D61',
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    flex: 1, // Make buttons take equal space
    margin: 4,
    backgroundColor: '#e5e5e5',
  },
  iconContainer: {
    backgroundColor: 'white',
    margin: 10,
    width: 60,
    height: 60,
    marginTop: 20,
    borderRadius: 20,
    shadowColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Profile;

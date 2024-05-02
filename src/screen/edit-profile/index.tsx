import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Avatar, Button, List } from 'react-native-paper';

import { styles } from './style';
import { ProfileParamsList } from '../../navigation/profile-stack/type';

type EditProfileType = NativeStackScreenProps<ProfileParamsList, 'editProfile'>;

const userInfo = {
  name: 'Константин',
  birthDate: '17 сентября 1998',
  city: 'Нижний Новгород',
  photoUri: 'https://example.com/path-to-avatar.jpg', // Replace with actual image URI
};

export const EditProfile: React.FC<EditProfileType> = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Avatar.Image size={100} source={{ uri: userInfo.photoUri }} style={styles.avatar} />
        <Pressable>
          <Text>Change profile photo</Text>
        </Pressable>
      </View>
      <List.Section>
        <List.Item
          title="Name"
          description={userInfo.name}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          onPress={() => {}}
        />
        <List.Item
          title="Birthday"
          description={userInfo.birthDate}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          onPress={() => {}}
        />
        <List.Item
          title="City"
          description={userInfo.city}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          onPress={() => {}}
        />
        <List.Item title="Выйти из аккаунта" titleStyle={{ color: 'red' }} onPress={() => {}} />
      </List.Section>
    </ScrollView>
  );
};

export default EditProfile;

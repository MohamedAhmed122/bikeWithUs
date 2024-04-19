import { Image, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { theme } from '../../../theme';
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
import { profileHeaderStyles as styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  ProfileStackParamsList,
  ProfileStackParams,
} from '../../../navigation/profile-stack/type';

type Navigation = NativeStackNavigationProp<
  ProfileStackParamsList,
  ProfileStackParams
>;

export default function ProfileHeader() {
  const navigation = useNavigation<Navigation>();
  return (
    <React.Fragment>
      <Image
        source={require('../../../assets/cover2.jpg')}
        style={styles.coverImage}
      />
      <View style={styles.profileImageContainer} />
      <Image
        source={{
          uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
        }}
        style={styles.profileImage}
      />
      <View style={{ alignItems: 'center' }}>
        <Text variant="headlineMedium" style={{ color: theme.colors.primary }}>
          Mohamed Youssef
        </Text>
        <Text
          variant="headlineSmall"
          numberOfLines={2}
          style={{ textAlign: 'center' }}
        >
          I don't know about you, but I love cycling 🚴🏿‍♂️
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() =>
              navigation.navigate(ProfileStackParams.bike, { id: '' })
            }
          >
            <Text variant="headlineMedium"> 🚴🏿‍♂️</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconContainer}>
            <Entypo name="instagram" size={29} color={theme.colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons
              name="chatbox-ellipses"
              size={29}
              color={theme.colors.primary}
            />
            {/* <Feather name="edit" size={29}  color={theme.colors.primary}/> */}
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
}

import { Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../../../theme';
import { Avatar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { ScaledSheet } from 'react-native-size-matters';
import { User } from '../../../types';

export default function ChatHeader({ user }: { user?: User }) {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: top ?? 20 }]}>
      <View style={styles.avatarContainer}>
        <Avatar.Image
          source={{
            uri: user?.image,
          }}
          size={50}
        />
        <Text style={styles.userName}>{user?.name}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <MaterialIcons name="call" size={30} color="white" style={styles.icon} />
        <MaterialIcons name="more-vert" size={30} color="white" />
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '20@s',
    // paddingTop: top ?? '20@s',
    paddingBottom: '10@s',
    borderBottomLeftRadius: '20@s',
    borderBottomRightRadius: '20@s',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: '3.84@s',
    elevation: 5,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    color: 'white',
    fontSize: '15@s',
    fontWeight: '700',
    marginLeft: '10@s',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10@s',
  },
});

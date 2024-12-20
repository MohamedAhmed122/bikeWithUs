import { View, ScrollView, Pressable } from 'react-native';
import React from 'react';

import { Avatar, Text } from 'react-native-paper';

import { FontAwesome6 } from '@expo/vector-icons';
import { theme } from '../../../../theme';
import { events } from '../../../../data/events';
import { infoStyle as styles } from './styles';
import ListIcon from '../../../../common/list-icon';
import { useNavigation } from '@react-navigation/native';
import { TabParams } from '../../../../navigation/params';
import { ProfileStackParams } from '../../../../navigation/profile-stack/type';

const item = events[0];

export default function EventDetailInfo() {
  const navigation = useNavigation();

  const onNavigateToUserProfile = () => {
    // TODO:
    // @ts-ignore
    navigation.navigate(TabParams.profileStack, {
      screen: ProfileStackParams.profile,
      params: { user: item },
    });
  };
  const renderDateSection = () => (
    <View style={styles.dateSectionContainer}>
      <Text style={styles.title}>{item?.title}</Text>

      <View style={{ flexDirection: 'row' }}>
        <View style={styles.priceContainer}>
          <View style={{ marginTop: 6 }}>
            <FontAwesome6 name="sack-dollar" size={20} color={theme.colors.primary} />
          </View>
          <Text style={styles.priceText}>10$</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.whiteText}>Jul</Text>
          <Text style={styles.dateText}>25</Text>
        </View>
      </View>
    </View>
  );

  const renderEventInfo = () => (
    <React.Fragment>
      <Pressable onPress={onNavigateToUserProfile} style={styles.organizerContainer}>
        <Avatar.Image source={{ uri: item.user.image }} size={32} />
        <Text style={styles.organizerText}>
          Organized by <Text style={{ fontWeight: '600' }}>{item.user.name}</Text>
        </Text>
      </Pressable>
      <View style={{ marginHorizontal: 20, marginTop: 8 }}>
        <ListIcon
          icon="calendar-month"
          color={theme.colors.lightGrey}
          listText="sat. January 25, 2020 at 3:00 PM - Thu, January
30. 2020 at 3:00 PM"
          containerStyle={{ alignItems: 'flex-start' }}
          textStyle={{ fontWeight: '600' }}
        />
        <ListIcon
          color={theme.colors.lightGrey}
          icon="location-pin"
          listText="69 quai des Chartrons 33300 Bordeaux, France"
          containerStyle={{ alignItems: 'center' }}
          textStyle={{ fontWeight: '600' }}
        />
      </View>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {renderDateSection()}
      {renderEventInfo()}
    </React.Fragment>
  );
}

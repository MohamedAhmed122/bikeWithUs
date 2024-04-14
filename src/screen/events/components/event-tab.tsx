import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { tabStyles as styles } from './styles';
import { Text } from 'react-native-paper';

export enum ActiveTab {
  UP_COMING = 'UP_COMING',
  PAST_EVENT = 'PAST_EVENT',
}

interface TabProps {
  setActiveTab(type: ActiveTab): void;
  activeTab: ActiveTab;
}

export const EventTab: React.FC<TabProps> = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          activeTab === ActiveTab.UP_COMING ? styles.activeTab : styles.tab,
          styles.TabLeft,
        ]}
        onPress={() => setActiveTab(ActiveTab.UP_COMING)}
      >
        <Text>UPCOMING</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          activeTab === ActiveTab.PAST_EVENT ? styles.activeTab : styles.tab
        }
        onPress={() => setActiveTab(ActiveTab.PAST_EVENT)}
      >
        <Text>PAST EVENT</Text>
      </TouchableOpacity>
    </View>
  );
};

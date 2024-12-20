import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const SuggestionRow = ({ item }: { item: string }) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      <Entypo name={'location-pin'} size={30} />
    </View>
    <Text style={styles.locationText}>{item}</Text>
  </View>
);

const Row = ({ item, onPress }: { item: string; onPress(): void }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Entypo name={'location-pin'} size={30} />
      </View>
      <Text style={styles.locationText}>{item}</Text>
    </TouchableOpacity>
  );
};

export { Row, SuggestionRow };
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    width: '80%',
    marginLeft: '1.5%',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 7,
    borderRadius: 10,
    marginRight: 10,
  },
  locationText: {},
});

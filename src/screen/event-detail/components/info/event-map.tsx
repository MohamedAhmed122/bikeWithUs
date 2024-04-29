import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
// @ts-expect-error
import GoogleStaticMap from 'react-native-google-static-map';
import { events } from '../../../../data/events';
import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../../../theme';

const { width } = Dimensions.get('window');

const item = events[0];
export default function EventMap() {
  return (
    <React.Fragment>
      <View style={styles.descContainer}>
        <Text style={styles.desc}>
          {item.description} I need to write some text for no reason I don't know what I am doing
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.mapContainer}>
          {/* <GoogleStaticMap
            latitude={'54.6784'}
            longitude={'25.2865'}
            zoom={13}
            size={{ width: width - 88, height: 150 }}
            apiKey={'AIzaSyCOptNuaVLxKv49WuGT405-GuKTPNRvj9I'}
          /> */}
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = ScaledSheet.create({
  descContainer: {
    marginHorizontal: '24@ms',
    marginTop: '12@mvs',
  },
  desc: {
    fontSize: 15,
    color: theme.colors.darkGray,
    fontWeight: '500',
  },
  mapContainer: {
    marginTop: '18@mvs',
    backgroundColor: 'white',
    alignItems: 'center',
    width: width - 48,
    paddingVertical: '20@mvs',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: '100@mvs',
  },
});

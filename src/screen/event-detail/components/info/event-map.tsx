import { Text, View, Dimensions } from 'react-native';
import React from 'react';

import { events } from '../../../../data/events';
import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../../../theme';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';

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
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ width: width - 88, height: 150 }}
            region={{
              latitude: 54.6784,
              longitude: 25.2865,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}>
            <Marker
              coordinate={{
                latitude: 54.6784,
                longitude: 25.2865,
              }}>
              <MaterialIcons name="location-on" color="red" size={35} />
            </Marker>
          </MapView>
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

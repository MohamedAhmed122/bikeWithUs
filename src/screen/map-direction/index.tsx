import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocation } from '../../hooks/useLocation';
import { RouteProp } from '@react-navigation/native';
import { MapStackParams, MapStackParamsList } from '../../navigation/map-stack/type';

type Route = RouteProp<MapStackParamsList, MapStackParams>;

export default function MapDirection({ route }: { route: Route }) {
  const { latitude, longitude } = route.params;
  const { location } = useLocation();

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: 54.6784,
        longitude: 25.2865,
        latitudeDelta: location.latitudeDelta,
        longitudeDelta: location.longitudeDelta,
      }}>
      <MapViewDirections
        origin={{ latitude: location.latitude, longitude: location.longitude }}
        destination={{ latitude, longitude }}
        // apikey={GOOGLE_MAPS_APIKEY}
        apikey="AIzaSyCOptNuaVLxKv49WuGT405-GuKTPNRvj9I"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({});

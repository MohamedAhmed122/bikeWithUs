import React, { useRef, useState, useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Avatar, Text } from 'react-native-paper';
import { View, FlatList, Image } from 'react-native';
import styles from './styles';
import { useLocation } from '../../hooks/useLocation';
import { Biker, bikers } from '../../data/biker';
import { MapCard } from './components/map-card';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MapButtons from './components/map-buttons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppInput } from '../../common/app-input';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MapStackParams, MapStackParamsList } from '../../navigation/map-stack/type';

enum ActiveView {
  UserEvent = 'UserEvent',
  SOSButton = 'SOSButton',
}
type Navigation = NativeStackNavigationProp<MapStackParamsList, MapStackParams>;

const MapScreen = ({ navigation }: { navigation: Navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const [activeView, setActiveView] = useState(ActiveView.SOSButton);

  const { location } = useLocation();

  const { top } = useSafeAreaInsets();

  const [bikersLocation, setBikersLocation] = useState(bikers);

  const onJoinUserEvent = (latitude: number, longitude: number) =>
    navigation.navigate(MapStackParams.mapDirections, { latitude, longitude });

  const map = useRef<MapView>(null);
  const flatList = useRef<FlatList>(null);
  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });

  useEffect(() => {
    if (!selectedLocation || !flatList?.current) {
      return;
    }
    const index = bikersLocation.findIndex((place) => place.id === selectedLocation);

    setTimeout(() => {
      flatList?.current?.scrollToIndex({ index });
    }, 100);

    const selectedPlace = bikersLocation[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: location.latitudeDelta,
      longitudeDelta: location.longitudeDelta,
    };
    map?.current?.animateToRegion(region);
  }, [selectedLocation]);

  const onSelectBiker = (id: string) => {
    setSelectedLocation(id);
    setActiveView(ActiveView.UserEvent);
  };

  const onAddNewLocation = (newBiker: Biker) => {
    setBikersLocation((biker) => [...biker, newBiker]);
  };

  return (
    <>
      <View
        style={{
          width: '100%',
          backgroundColor: 'white',
          height: 70 + top,
          zIndex: 10,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}>
        <AppInput
          rightIconName="search1"
          placeholder="Destination"
          inputContainerStyle={{ marginTop: top }}
          LeftIcon={() => <AntDesign name="arrowright" size={24} color="gray" />}
        />
      </View>
      <View style={styles.mapContainer}>
        <MapView
          ref={map}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 54.6784,
            longitude: 25.2865,
            latitudeDelta: location.latitudeDelta,
            longitudeDelta: location.longitudeDelta,
          }}>
          {location && (
            <Marker
              coordinate={{
                latitude: 54.6784,
                longitude: 25.2865,
              }}>
              <MaterialIcons name="location-on" color="red" size={35} />
            </Marker>
          )}
          {bikersLocation?.map((biker) => (
            <Marker
              onPress={() => onSelectBiker(biker.id)}
              key={biker.id}
              coordinate={{ latitude: biker.latitude, longitude: biker.longitude }}>
              {biker.isSOS ? (
                <View
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}>
                  <Image
                    source={require('../../assets/sos.jpg')}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                    }}
                  />
                </View>
              ) : (
                <View>
                  <Text variant="headlineLarge"> 🚴🏿‍♂️</Text>
                </View>
              )}
            </Marker>
          ))}
        </MapView>
        <View style={styles.mapCard}>
          {activeView === ActiveView.UserEvent && (
            <FlatList
              ref={flatList}
              style={{ marginRight: 8 }}
              data={bikersLocation}
              renderItem={({ item }) => (
                <MapCard
                  item={item}
                  selected={item.id === selectedLocation}
                  onPress={() => setSelectedLocation(item.id)}
                  onCancelPressed={() => setActiveView(ActiveView.SOSButton)}
                  onJoinUserEvent={() => onJoinUserEvent(item.latitude, item.longitude)}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToAlignment={'center'}
              decelerationRate={'fast'}
              viewabilityConfig={viewConfig.current}
            />
          )}
        </View>
        {activeView === ActiveView.SOSButton && <MapButtons onAddNewLocation={onAddNewLocation} />}
      </View>
    </>
  );
};

export default MapScreen;

import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export const useLocation = () => {
  const [location, setLocation] = useState({
    latitude: 54.6784,
    longitude: 25.2865,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
      });
    })();
  }, []);

  return { location, errorMsg };
};

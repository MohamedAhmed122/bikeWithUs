import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../../theme';
import { AppInput } from '../../../common/app-input';
import ModalContainer from './modal-container';
import { Checkbox } from 'react-native-paper';
import { useToggle } from '../../../hooks/useToggle';
import { Biker } from '../../../data/biker';
import Geocoder from 'react-native-geocoding';

import { GooglePlaceData, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SuggestionRow } from './search-suggestion-row';
import PlacesAutoComplete from './places-auto-complete';
import { users } from '../../../data/users';
// import PlacesAutoComplete from './places-auto-complete';

Geocoder.init('AIzaSyD8kMX3r5_zP5DAEpynVpa2Xa5ihSrz1vg');

export default function MapButtons({ onAddNewLocation }: { onAddNewLocation(biker: Biker): void }) {
  const [isSosModalVisible, setIsSosModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [userLocationInput, setUserLocationInput] = useState<GooglePlaceData>();
  const [isSoS, setIsSos] = useState(false);
  const [text, setText] = useState('');
  const { value: checked, toggleButton } = useToggle(true);
  const [eventCoords, setEventCoords] = useState<{ latitude: number; longitude: number }>();

  const convertLocationToCoord = () => {
    if (userLocationInput?.description) {
      Geocoder.from(userLocationInput.description)
        .then((json) => {
          const location = json.results[0].geometry.location;
          console.log(location.lat, location.lng);
          setEventCoords({ latitude: location.lat, longitude: location.lng });
        })
        .catch((error) => console.warn(error));
    }
  };

  useEffect(() => {
    if (userLocationInput?.description) {
      console.log(userLocationInput?.description, 'userLocationInput?.description');
      convertLocationToCoord();
    }
  }, [userLocationInput?.description]);

  console.log(eventCoords, 'eventCoords');

  const onSubmitCreateNewEvent = () => {
    setIsCreateModalVisible(false);
    setIsSosModalVisible(false);
    console.log(eventCoords?.latitude, eventCoords?.longitude);
    onAddNewLocation({
      id: Date.now().toLocaleString(),
      latitude: eventCoords?.latitude || 54.18811486939455,
      longitude: eventCoords?.longitude || 25.57497189254693,
      text,
      user: users[Math.floor(Math.random() * 12) + 1],
      joinable: isSoS ? false : checked,
      isSOS: isSoS,
      miles: Math.floor(Math.random() * 20) + 1,
    });
    setText('');
  };

  const onModalOpen = (isEvent?: boolean) => {
    if (isEvent) {
      setIsSos(false);
      setIsCreateModalVisible(true);
    } else {
      setIsSos(true);
      setIsSosModalVisible(true);
    }
  };

  return (
    <React.Fragment>
      <View style={styles.sosContainer}>
        <TouchableOpacity style={[styles.button, styles.sosButton]} onPress={() => onModalOpen()}>
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onModalOpen(true)}>
          <Entypo name="plus" size={35} color={theme.colors.white} />
        </TouchableOpacity>
      </View>
      <ModalContainer
        title="what's your emergency?"
        onClose={() => setIsSosModalVisible(false)}
        visible={isSosModalVisible}
        onSubmitModal={() => onSubmitCreateNewEvent()}>
        <>
          <AppInput
            placeholder="what's the problem?"
            inputContainerStyle={{ padding: 2, borderRadius: 14 }}
          />
          <PlacesAutoComplete onChangeLocation={setUserLocationInput} />
          <AppInput
            placeholder="More details"
            inputContainerStyle={styles.descInput}
            value={text}
            onChangeText={setText}
          />
        </>
      </ModalContainer>

      <ModalContainer
        title="Let's go for ride"
        onClose={() => setIsCreateModalVisible(false)}
        visible={isCreateModalVisible}
        onSubmitModal={() => onSubmitCreateNewEvent()}>
        <>
          <PlacesAutoComplete onChangeLocation={setUserLocationInput} />
          <PlacesAutoComplete onChangeLocation={() => {}} placeholder="Destination" />
          <AppInput
            placeholder="Details"
            inputContainerStyle={styles.descInput}
            value={text}
            onChangeText={setText}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox.Android status={checked ? 'checked' : 'unchecked'} onPress={toggleButton} />
            <Text style={{ color: theme.colors.darkGray }}>Do you want other biker join you?</Text>
          </View>
        </>
      </ModalContainer>
    </React.Fragment>
  );
}

const styles = ScaledSheet.create({
  textInput: {
    width: '95%',
    marginLeft: '2.5%',
    backgroundColor: theme.colors.gray,
    minHeight: 50,
    borderRadius: '15@s',
    padding: '10@s',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20@vs',
    fontSize: 18,
    color: theme.colors.black,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sosButton: {
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: theme.colors.danger,
    shadowColor: theme.colors.danger,
  },
  sosContainer: {
    flexDirection: 'row',
    width: '90%',
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  sosText: {
    color: theme.colors.danger,
    fontWeight: '900',
    fontSize: 15,
  },
  descInput: {
    padding: 2,
    minHeight: 100,
    paddingTop: 10,
    borderRadius: 15,
    alignItems: 'flex-start',
  },
});

// 1- create SOS DYNAMIC
// 2- CREATE EVENT DYNAMIC
// 3- CREATE ASK AI
// 4- improve EVENT DESIGN
// 5- navigate to user profile

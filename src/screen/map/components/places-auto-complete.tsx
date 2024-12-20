import React from 'react';
import {
  GooglePlacesAutocomplete,
  GooglePlaceData,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete';
import { SuggestionRow } from './search-suggestion-row';
import { theme } from '../../../theme';
import { ScaledSheet } from 'react-native-size-matters';

export default function PlacesAutoComplete({
  onChangeLocation,
  placeholder = 'Location',
}: {
  onChangeLocation(state: GooglePlaceData): void;
  placeholder?: string;
}) {
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      enablePoweredByContainer={false}
      currentLocation={false}
      currentLocationLabel={placeholder}
      styles={{
        textInput: styles.textInput,
      }}
      onPress={(data, details = null) => {
        console.log(JSON.stringify({ data, details }));
        onChangeLocation(data);
        console.log(JSON.stringify(details?.geometry?.location));
      }}
      textInputProps={{
        defaultValue: 'a7a',
        leftIcon: { type: 'font-awesome', name: 'chevron-left' },
        errorStyle: { color: 'red' },
      }}
      query={{
        key: 'AIzaSyD8kMX3r5_zP5DAEpynVpa2Xa5ihSrz1vg',
        language: 'en',
        components: 'country:lt',
        location: '54.68811486939455, 25.27497189254693',

        radius: '15000', //15 km
        enablePoweredByContainer: false,
      }}
      suppressDefaultStyles
      renderRow={(item) => <SuggestionRow item={item?.description} />}
    />
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
});

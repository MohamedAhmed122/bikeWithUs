import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import PhoneInput from 'react-native-phone-input';
import { ms, mvs } from 'react-native-size-matters';
import { theme } from '../../theme';
import { AppButton } from '../../common/app-button';
import { AppInput } from '../../common/app-input';

export default function PhoneAuthentication() {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View>
      <SafeAreaView />
      <View style={{ marginTop: 100 }}>
        <Text
          style={{
            // marginLeft: 20,
            marginBottom: 18,
            fontSize: 24,
            textAlign: 'center',
            color: theme.colors.secondary,
            fontWeight: '700',
          }}>
          Hot wheel 🛞
        </Text>
        <PhoneInput
          initialCountry="lt"
          style={{
            marginHorizontal: 20,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderWidth: 1,
            height: mvs(48),
            alignSelf: 'stretch',
            backgroundColor: 'white',
            borderColor: 'lightgray',
            borderRadius: 8,
            paddingLeft: ms(16),
          }}
          onChangePhoneNumber={(displayValue, iso2) => console.log(displayValue, iso2)}
        />
      </View>
      {isPressed && (
        <AppInput
          placeholder="code"
          inputContainerStyle={{
            width: 'auto',
            marginLeft: 20,
            marginRight: 20,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderWidth: 1,
            height: mvs(48),
            alignSelf: 'stretch',
            backgroundColor: 'white',
            borderColor: 'lightgray',
            borderRadius: 8,
            padding: 0,
          }}
        />
      )}
      <AppButton
        title={isPressed ? 'Login' : 'verify'}
        onPress={() => setIsPressed(true)}
        color={theme.colors.secondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

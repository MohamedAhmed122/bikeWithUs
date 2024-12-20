import { Text, View } from 'react-native';
import React from 'react';
import { ReportStackParams, ReportStackParamsList } from './type';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator<ReportStackParamsList>();

export default function ReportStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ReportStackParams.report}
        options={{ headerShown: false }}
        component={Report}
      />
    </Stack.Navigator>
  );
}

function Report() {
  return (
    <>
      <SafeAreaView />
      <WebView
        // style={{ height: '100%', width: '100%' }}
        source={{
          uri: 'https://app.chatsimple.ai/iframe23/d0f3824b-234b-4388-be34-3576d5004477/5ccaeb2e-30f1-4ba3-86be-71acd2cc1991/ec18a2f8-edbb-4bbc-8ef0-d145c355995b',
        }}
      />
    </>
  );
}

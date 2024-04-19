import { Text, View } from 'react-native';
import React from 'react';
import { ReportStackParams, ReportStackParamsList } from './type';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<ReportStackParamsList>();

export default function ReportStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ReportStackParams.report} component={Report} />
    </Stack.Navigator>
  );
}

function Report() {
  return (
    <View>
      <Text>report-stack</Text>
    </View>
  );
}

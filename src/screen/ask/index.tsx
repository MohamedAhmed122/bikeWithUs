import { FlatList, SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';

import EventCard from '../../components/event-card';
import { theme } from '../../theme';
import { asks } from '../../data/ask';
import { Tab } from '../../common/tab';
import FixedButton from '../../common/fixed-button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';
import { AskStackParams, AskStackParamsList } from '../../navigation/ask-stack/type';
import { AskCard } from './components/ask-card';

type Navigation = NativeStackNavigationProp<AskStackParamsList, AskStackParams>;

export const Ask = () => {
  const navigation = useNavigation<Navigation>();

  const onCreateButtonPressed = () => navigation.navigate(AskStackParams.createAsk);

  const onAskCardPressed = (id: string) => navigation.navigate(AskStackParams.askDetail, { id });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <FlatList
        data={asks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AskCard item={item} onAskCardPressed={() => onAskCardPressed(item.id)} />
        )}
      />
      <FixedButton onPress={onCreateButtonPressed} />
    </SafeAreaView>
  );
};

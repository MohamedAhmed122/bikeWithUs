import { Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';

import { askDetailsStyle as styles } from './style';

import { asks } from '../../data/ask';
import { RouteProp } from '@react-navigation/native';
import { AskStackParams, AskStackParamsList } from '../../navigation/ask-stack/type';
import { theme } from '../../theme';

import CommentInBox from '../ask/components/comment-index';
import CommentList from '../ask/components/commentList';

type Route = RouteProp<AskStackParamsList, AskStackParams>;

export default function AskDetails({ route }: { route: Route }) {
  const id = route.params?.id;

  const currentAsk = asks.find((item) => item.id === id);

  console.log(currentAsk);
  if (!currentAsk) {
    return;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <View style={styles.askDetailsContainer}>
        <Text style={styles.askDetailsText}>{currentAsk.title}</Text>
        <View style={styles.dateSectionContainer}>
          <Text style={styles.dateDetailText}>date</Text>
          <Text style={styles.dateDetailText}>{currentAsk.date}</Text>
        </View>
      </View>
      <View style={styles.infoAskContainer}>
        <Image resizeMode="cover" style={styles.avatar} source={{ uri: currentAsk.user.image }} />
        <View>
          <Text style={styles.postNameText}>Posted by</Text>
          <Text style={styles.infoDetailsText}>{currentAsk.user.name}</Text>
        </View>
      </View>
      <View style={styles.infoAskDescriptionContainer}>
        <Text style={styles.askDescription}>{currentAsk.description}?</Text>
      </View>
      <ScrollView style={styles.CommentStyleList}>
        <CommentList />
        <CommentList />
        <CommentList />
        <CommentList />
      </ScrollView>

      <CommentInBox />
    </SafeAreaView>
  );
}

import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { StyleSheet, Pressable } from 'react-native';

import { Text } from 'react-native-paper';
import { COLORS } from '../../theme';

interface Props {
  isGoing: boolean;
  toggleButton(): void;
}

export const GoingButton: React.FC<Props> = ({ isGoing, toggleButton }) => {
  return (
    <Pressable style={styles.flex} onPress={toggleButton}>
      <Text style={[styles.text, [isGoing ? styles.going : styles.notGoing]]}>
        {isGoing ? 'Joined' : 'Going?'}
      </Text>
      <AntDesign
        name={isGoing ? 'like1' : 'dislike2'}
        color={COLORS.primary}
        size={20}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
  },
  text: {
    color: COLORS.primary,
    marginRight: 4,
  },
  going: {
    marginBottom: -5,
    fontWeight: 'bold',
  },
  notGoing: {
    marginBottom: 3,
  },
});

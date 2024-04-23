import { Image, Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import { photos } from '../../../../data/photos';
const { width } = Dimensions.get('window');
const MARGIN = 15;

export default function PhotoTab() {
  return (
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
      {photos.map((item) => (
        <Image key={item} source={{ uri: item }} resizeMode="cover" style={styles.image} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: (width - MARGIN * 4) / 3,
    height: (width - MARGIN * 4) / 2.5,
    borderRadius: 15,
    marginLeft: MARGIN,
    marginTop: MARGIN,
  },
});

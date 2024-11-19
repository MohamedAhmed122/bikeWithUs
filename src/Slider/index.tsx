import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Slider from '@react-native-community/slider';

type DynamicSliderProps = {
  maxNumber: number;
  value: number;
  onChange(val: number): void;
  enable: boolean;
  lowerLimit?: number;
  upperLimit?: number;
};

const DynamicSlider: React.FC<DynamicSliderProps> = ({
  maxNumber,
  value,
  onChange,
  enable,
  lowerLimit,
  upperLimit,
}) => {
  console.log(lowerLimit, upperLimit);
  const sliderWidth = Dimensions.get('window').width * 0.9;
  // Calculate intervals
  const majorInterval = Math.floor(maxNumber ?? 1 / 10); // Divide maxNumber into 10 intervals
  const minorInterval = majorInterval / 5; // 5 minor marks between each major mark

  // Generate major marks including maxNumber as the last point
  const majorMarks = Array.from({ length: 11 }, (_, i) => {
    const mark = i * majorInterval;
    return mark > maxNumber ? maxNumber : mark;
  });
  majorMarks[majorMarks.length - 1] = maxNumber; // Ensure last mark is maxNumber

  // Generate minor marks up to maxNumber
  const minorMarks = Array.from({ length: Math.ceil(maxNumber / minorInterval) }, (_, i) => {
    const mark = i * minorInterval;
    return mark > maxNumber ? maxNumber : mark;
  });

  return (
    <>
      <View style={{ height: 10, width: '100%', marginBottom: 5, backgroundColor: 'gray' }} />
      <View style={styles.container}>
        <View style={[styles.sliderContainer, { width: sliderWidth }]}>
          <View
            style={[
              styles.marksContainer,
              {
                width: sliderWidth - 4,
                marginLeft: 2,
              },
            ]}>
            {/* Render Major Marks */}
            {majorMarks.map((mark, index) => (
              <View
                key={`major-${index}`}
                style={[
                  styles.majorMark,
                  {
                    left: `${(mark / maxNumber) * 100 + 1}%`,
                  },
                ]}>
                <Text style={styles.majorLabel}>{mark}</Text>
              </View>
            ))}

            {/* Render Minor Marks */}
            {minorMarks.map((mark, index) => (
              <View
                key={`minor-${index}`}
                style={[
                  styles.minorMark,
                  {
                    left: `${(mark / maxNumber) * 100}%`,
                  },
                ]}
              />
            ))}
          </View>
          {/* Slider Component */}
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={maxNumber}
            lowerLimit={lowerLimit}
            upperLimit={upperLimit}
            value={value}
            step={1}
            disabled={!enable}
            onValueChange={(val) => onChange(val)}
            thumbTintColor={enable ? '#007bff' : 'gray'}
            minimumTrackTintColor="#ccc"
            maximumTrackTintColor="#ccc"
          />
        </View>
        {/* <Text style={styles.value}>Value: {value}</Text> */}
      </View>
      <View style={{ height: 10, width: '100%', backgroundColor: 'gray' }} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 6,
  },
  sliderContainer: {
    position: 'relative',
    height: 50,
    justifyContent: 'center',
  },
  marksContainer: {
    position: 'absolute',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  majorMark: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
  },
  majorLabel: {
    fontSize: 10,
    textAlign: 'center',
    color: '#fff',
    transform: [{ translateX: -10 }],
    marginBottom: 5,
  },
  minorMark: {
    position: 'absolute',
    top: 20,
    width: 1,
    height: 10,
    backgroundColor: '#ccc',
  },
  value: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default DynamicSlider;

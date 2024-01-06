import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {colors, images} from 'values';

type DayComponentProps = {};
export const DayComponent: FC<DayComponentProps> = () => {
  return (
    <View style={styles.container}>
      <Image source={images.left} style={styles.icon} />
      <View style={styles.wrapper}>
        <Text style={styles.day}>August 2023</Text>
        <Text style={styles.value}>$2,344.87</Text>
      </View>
      <Image source={images.right} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    tintColor: colors.grey,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  day: {
    fontSize: 26,
    color: colors.white,
    fontWeight: 'bold',
  },
  value: {
    color: colors.white,
  },
});

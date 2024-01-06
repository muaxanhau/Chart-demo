import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {colors, images} from 'values';

type StatusComponentProps = {
  text: string;
};
export const StatusComponent: FC<StatusComponentProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Image source={images.dot} style={styles.dot} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.grey,
  },
  dot: {
    tintColor: colors.purple1,
    width: 16,
    height: 5,
    resizeMode: 'cover',
  },
});

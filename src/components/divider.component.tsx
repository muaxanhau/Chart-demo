import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {colors} from 'values';

export const DividerComponent: FC = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 0.5,
    backgroundColor: colors.blue1,
  },
});

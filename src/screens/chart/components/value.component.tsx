import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {colors} from 'values';

type ValueComponentProps = {
  text: string;
  value: string;
};
export const ValueComponent: FC<ValueComponentProps> = ({text, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text}>{value}</Text>
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
    fontSize: 15,
    color: colors.white,
    fontWeight: '500',
  },
});

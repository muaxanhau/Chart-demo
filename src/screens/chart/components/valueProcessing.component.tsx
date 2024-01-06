import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {colors} from 'values';

type ValueProcessingComponentProps = {
  title: string;
  value: number;
  max: number;
  positive: boolean;
};
export const ValueProcessingComponent: FC<ValueProcessingComponentProps> = ({
  title,
  value,
  max,
  positive,
}) => {
  const color = positive ? colors.green1 : colors.red1;
  const percent = (value / max) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.processingContainer}>
        <View
          style={{backgroundColor: color, height: '100%', width: `${percent}%`}}
        />
      </View>
      <Text style={[styles.title, styles.titleRight, {color}]}>${max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 16,
  },
  titleRight: {
    textAlign: 'right',
  },
  processingContainer: {
    flex: 1,
    height: 5,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: colors.blue1,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {colors} from 'values';

type SectionComponentProps = PropsWithChildren;
export const SectionComponent: FC<SectionComponentProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: colors.blue2,
    gap: 16,
  },
});

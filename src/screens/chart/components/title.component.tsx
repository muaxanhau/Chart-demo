import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {colors} from 'values';

type TitleComponentProps = {
  icon: ImageSourcePropType;
  text: string;
  value: string;
};
export const TitleComponent: FC<TitleComponentProps> = ({
  text,
  value,
  icon,
}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>

      <Text style={[styles.text, styles.textRight]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '900',
  },
  textRight: {
    marginLeft: 'auto',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
    tintColor: colors.purple1,
  },
});

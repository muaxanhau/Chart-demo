import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import {colors} from 'values';

type TabComponentProps = {
  tabs: {
    name: string;
    onPress: () => void;
  }[];
};
export const TabComponent: FC<TabComponentProps> = ({tabs}) => {
  const [tabIndex, setTabIndex] = useState(0);

  const onPress = (index: number, callback: () => void) => () => {
    setTabIndex(index);
    callback();
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const borderLeftWidth = index === 0 ? 0 : 0.2;
        const backgroundColor =
          tabIndex === index ? colors.purple1 : colors.blue1;
        const color = tabIndex === index ? colors.blue1 : colors.purple1;

        return (
          <TouchableOpacity
            key={index}
            style={[styles.wrapper, {borderLeftWidth, backgroundColor}]}
            onPress={onPress(index, tab.onPress)}>
            <Text style={[styles.text, {color}]}>{tab.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
    borderWidth: 0.2,
    borderRightWidth: 0,
    padding: 16,
    borderColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import {colors} from 'values';

type TabButtonComponentProps = {
  tabs: {
    name: string;
    onPress: () => void;
  }[];
};
export const TabButtonComponent: FC<TabButtonComponentProps> = ({tabs}) => {
  const [tabIndex, setTabIndex] = useState(0);

  const onPress = (index: number, callback: () => void) => () => {
    setTabIndex(index);
    callback();
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const backgroundColor =
          tabIndex === index ? colors.purple1 : colors.blue2;
        const color = tabIndex === index ? colors.blue1 : colors.white;

        return (
          <TouchableOpacity
            key={index}
            style={[styles.wrapper, {backgroundColor}]}
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
    gap: 8,
  },
  wrapper: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  text: {
    fontWeight: 'bold',
  },
});

import {Button, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {useMainStackNavigation} from 'utils';

export const SplashScreen: FC = () => {
  const navigation = useMainStackNavigation();
  const onPressChartScreen = () => {
    navigation.navigate('Chart');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen List</Text>
      <Button title="=> Chart screen" onPress={onPressChartScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

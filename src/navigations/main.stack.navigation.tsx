import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackNavigationModel} from 'models';
import {ChartScreen, SplashScreen} from 'screens';

const Stack = createStackNavigator<MainStackNavigationModel>();
export const MainStackNavigation: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Splash'} component={SplashScreen} />
      <Stack.Screen name={'Chart'} component={ChartScreen} />
    </Stack.Navigator>
  );
};

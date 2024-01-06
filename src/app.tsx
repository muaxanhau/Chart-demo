import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {MainStackNavigation} from 'navigations';
import {withProvider} from 'utils';

export const App: FC = withProvider(() => {
  return (
    <>
      <StatusBar hidden translucent />

      <MainStackNavigation />
    </>
  );
});

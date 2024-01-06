import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';

export const withProvider =
  (Component: FC): FC =>
  () => {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <RecoilRoot>
            <GestureHandlerRootView style={{flex: 1}}>
              <Component />
            </GestureHandlerRootView>
          </RecoilRoot>
        </SafeAreaProvider>
      </NavigationContainer>
    );
  };

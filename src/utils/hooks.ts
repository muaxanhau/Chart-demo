import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackNavigationModel} from 'models';

export const useGoBack = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  return goBack;
};

export const useMainStackNavigation = () =>
  useNavigation<NavigationProp<MainStackNavigationModel>>();

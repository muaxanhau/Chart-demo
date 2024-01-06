import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, images} from 'values';
import {useGoBack} from 'utils';

type TabBarComponentProps = {
  title: string;
  rightIcon?: ImageSourcePropType;
  onPressRightIcon?: () => void;
};
export const TabBarComponent: FC<TabBarComponentProps> = ({
  title,
  rightIcon,
  onPressRightIcon,
}) => {
  const insets = useSafeAreaInsets();
  const goBack = useGoBack();

  return (
    <View style={[styles.container, {paddingTop: insets.top || 16}]}>
      <TouchableOpacity onPress={goBack}>
        <Image source={images.back} style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {!!rightIcon && (
        <TouchableOpacity onPress={onPressRightIcon}>
          <Image source={rightIcon} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.blue1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    tintColor: colors.purple1,
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  title: {
    color: colors.grey,
    fontWeight: 'bold',
  },
});

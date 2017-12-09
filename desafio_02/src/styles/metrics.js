import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  tinyMargin: 5,
  smallMargin: 10,
  baseMargin: 25,
  basePadding: 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: 54,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  btnAndroid: (Platform.OS === 'android') ? 20 : 0,
  baseRadius: 10,
  email: 86,
};

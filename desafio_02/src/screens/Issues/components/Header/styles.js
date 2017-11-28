import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    height: 56 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    borderRadius: 5,
    color: colors.black,
    fontSize: fonts.middle,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: fonts.icon,
    color: colors.darker,
  },
  loading: {
    paddingVertical: 10,
  },
});

export default styles;

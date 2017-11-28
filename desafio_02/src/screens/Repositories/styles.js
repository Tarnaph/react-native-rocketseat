import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: metrics.headerSpace,
  },
  headerContainer: {
    height: 56 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    backgroundColor: colors.background,
    borderRadius: 5,
    flex: 0.95,
    padding: 10,
    color: colors.dark,
    fontSize: fonts.small,
  },
  icon: {
    fontSize: fonts.icon,
    color: colors.darker,
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  error: {
    color: colors.error,
    fontSize: fonts.small,
  },
  empty: {
    color: colors.darker,
    alignSelf: 'center',
    paddingVertical: 5,
  },
  loading: {
    paddingVertical: 10,
  },
  flatRepositories: {
    paddingTop: 20,
    minHeight: height,
  },
  emptyContainer: {
    paddingTop: 0,
  },
});

export default styles;

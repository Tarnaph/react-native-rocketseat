import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: metrics.baseNavs,
    backgroundColor: colors.rose,
    borderBottomColor: colors.roseDark,
    borderBottomWidth: 1,
    elevation: 3,
  },

  scroll: {
    flex: 1,
  },

  menu: {
    height: metrics.baseNavs,
    justifyContent: 'space-between',
  },

  title: {
    marginHorizontal: metrics.smallMargin,
    fontWeight: 'bold',
    fontSize: fonts.smaller,
    color: colors.white,
    opacity: 0.6,
  },

  activeContainer: {
    width: '100%',
    height: 3,
    backgroundColor: colors.roseDark,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  active: {
    marginTop: 3,
    opacity: 1,
  },

  inactive: {
    opacity: 0.6,
    height: 43,
  },

  errorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorMsg: {
    color: colors.white,
    fontSize: fonts.small,
    fontWeight: 'bold',
  },

  errorIcon: {
    color: colors.white,
    fontSize: fonts.regular,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default styles;

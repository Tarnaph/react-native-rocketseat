import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.navBarHeight,
    backgroundColor: colors.darker,
    alignContent: 'center',
    justifyContent: 'center',
    borderTopColor: colors.daker,
    borderTopWidth: 1,
    elevation: 10,
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  touchIcon: {
    flexDirection: 'row',
  },

  icon: {
    fontSize: fonts.big,
    color: colors.gray,
    opacity: 0.6,
  },

  iconAtive: {
    color: colors.white,
    backgroundColor: colors.alfa,
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.7,
    opacity: 1,
  },

  fullerContainer: {
    height: 3,
    width: 3,
    borderRadius: 3,
    backgroundColor: colors.alfa,
    zIndex: 1,
  },

  green: {
    backgroundColor: colors.green,
  },

});

export default styles;

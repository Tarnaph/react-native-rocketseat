import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.container,
    ...general.contentContainer,
    alignItems: 'center',
    backgroundColor: colors.darker,
  },

  title: {
    fontWeight: 'bold',
  },

  logoIcon: {
    color: colors.darker,
    marginTop: 80,
  },

  formContainer: {
    alignSelf: 'stretch',
  },

  input: {
    backgroundColor: colors.white,
    paddingHorizontal: metrics.basePadding,
    shadowColor: colors.light,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    borderRadius: 100,
    alignSelf: 'stretch',
    height: 44,
    fontSize: fonts.regular,
  },

  button: {
    flex: 0,
    marginTop: metrics.smallMargin,
  },

  userInformation: {
    marginTop: 130,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  favoritesText: {
    fontSize: fonts.small,
    color: colors.regular,
    fontWeight: 'bold',
  },
});

export default styles;

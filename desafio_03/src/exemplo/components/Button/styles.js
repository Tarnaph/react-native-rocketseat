import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: fonts.regular,
    color: colors.white,
    fontWeight: 'bold',
  },

  'button-color-dark': {
    backgroundColor: colors.darker,
  },

  'button-color-success': {
    backgroundColor: colors.success,
  },

  'button-color-danger': {
    backgroundColor: colors.danger,
  },
});

export default styles;

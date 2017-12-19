import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    minWidth: 115,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  'color-Cancel': {
    backgroundColor: colors.light,
  },

  'color-Save': {
    backgroundColor: colors.success,
  },

  'color-Warning': {
    backgroundColor: colors.warning,
  },

  'color-Danger': {
    backgroundColor: colors.danger,
  },

  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.white,
  },

});

export default styles;

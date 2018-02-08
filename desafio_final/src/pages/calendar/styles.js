import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },

  top: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.purpleDark,
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: metrics.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.purpleDarker,
  },

  medium: {
    padding: metrics.basePadding,
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default styles;

import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },

  top: {
    flexDirection: 'row',
    backgroundColor: colors.purpleDark,
    borderBottomWidth: 1,
    borderBottomColor: colors.purpleDarker,
  },

  medium: {
  },

  list: {
    paddingHorizontal: metrics.basePadding,
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  loading: {
    marginTop: metrics.basePadding,
  },

});

export default styles;

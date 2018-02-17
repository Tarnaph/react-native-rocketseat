import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.basePadding,
    backgroundColor: colors.purple,
    justifyContent: 'center',
  },

  title: {
    alignSelf: 'center',
    fontSize: fonts.larger,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: metrics.basePadding * 2,
  },
});

export default styles;

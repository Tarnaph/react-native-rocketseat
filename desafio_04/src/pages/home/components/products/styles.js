import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: metrics.basePadding,
    justifyContent: 'space-around',
  },

  errorMsg: {
    fontWeight: 'bold',
    fontSize: fonts.small,
    color: colors.gray,
  },

});

export default styles;

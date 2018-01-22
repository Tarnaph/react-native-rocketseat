import { StyleSheet } from 'react-native';
import {  colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flex: 1,
  },

  scroll: {
    paddingHorizontal: metrics.basePadding,
    paddingTop: metrics.basePadding,
  },

  space: {
    height: metrics.baseNavs,
    width: '100%',
    backgroundColor: colors.alfa,
  },

  errorMsg: {
    padding: metrics.basePadding,
    alignSelf: 'center',
    alignContent: 'center',
    color: colors.gray,
    fontWeight: 'bold',
    fontSize: fonts.small,
  },

  amountContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
});

export default styles;

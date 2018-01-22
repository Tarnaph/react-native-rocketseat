import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    width: metrics.screenWidth,
    height: (metrics.screenHeight) / 10,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.light,
  },

  title: {
    fontWeight: 'bold',
    fontSize: fonts.regular,
    color: colors.light,
  },

  subtitle: {
    fontWeight: 'bold',
    fontSize: fonts.big,
    color: colors.green,
  },
});

export default styles;

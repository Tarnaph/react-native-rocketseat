import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    height: 56 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontSize: fonts.regular,
    fontWeight: 'bold',
    paddingRight: 35,
  },
  icon: {
    fontSize: fonts.medium,
    color: colors.orange,
  },
  iconContainer: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
});

export default styles;

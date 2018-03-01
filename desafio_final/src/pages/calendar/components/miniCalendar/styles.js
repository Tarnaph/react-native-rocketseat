import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: (metrics.navBarHeight * 1.3) + metrics.statusBarHeight,
    paddingHorizontal: metrics.basePadding + 1,
    justifyContent: 'center',
  },

  containerCalendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  containerTitle: {
    width: metrics.screenWidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginTop: 15,
    color: colors.white,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },

  containerDown: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconLeft: {
    flex: 1,
    maxWidth: 20,
  },

  iconRight: {
    flex: 1,
    maxWidth: 20,
    alignItems: 'flex-end',
  },

  iconDown: {
    justifyContent: 'center',
    alignItems: 'center',
    },
});

export default styles;

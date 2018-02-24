import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.purple,
    paddingTop: metrics.smallMargin + metrics.statusBarHeight,
    paddingBottom: metrics.smallMargin,
    paddingHorizontal: metrics.baseMargin,
    height: metrics.navBarHeight + metrics.statusBarHeight,
    borderBottomWidth: 1,
    borderBottomColor: colors.purpleDarker,
    elevation: 10,
  },

  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.white,
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.baseMargin,
    height: metrics.navBarHeight,
  },

  iconAddContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: (metrics.baseMargin * 1.5) / 2,
    width: metrics.baseMargin * 1.5,
    height: metrics.baseMargin * 1.5,
  },

  iconBackContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: (metrics.baseMargin * 1.5) / 2,
    width: metrics.baseMargin * 1.5,
    height: metrics.baseMargin * 1.5,
  },

  iconBack: {
    fontSize: fonts.bigger,
    fontWeight: 'bold',
    color: colors.white,
  },

  notification: {
    zIndex: 20,
  },

  hide: {
    position: 'absolute',
    top: -100,
  },

});

export default styles;

import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    minWidth: metrics.screenWidth,
    height: 35,
    backgroundColor: colors.purpleDark,
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    elevation: 10,
  },

  show: {
    top: 0,
  },

  hide: {
    top: -35,
  },

  title: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: fonts.small,
    color: colors.lighter,
  },

});

export default styles;

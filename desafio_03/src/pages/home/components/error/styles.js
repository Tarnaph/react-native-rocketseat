import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    minWidth: metrics.screenWidth,
    height: 35,
    backgroundColor: colors.danger,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    borderTopColor: colors.white,
    borderTopWidth: 1,
  },

  title: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: fonts.small,
    color: colors.white,
  },

});

export default styles;

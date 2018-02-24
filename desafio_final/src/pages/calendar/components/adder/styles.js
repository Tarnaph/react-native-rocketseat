import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.alfa,
  },

  box: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    maxHeight: (metrics.screenHeight / 1.9) + (metrics.statusBarHeight * 1.6) ,
    width: '90%',
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    justifyContent: 'space-around',
    elevation: 10,
  },

  title: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.purple,
  },

  header: {
    alignItems: 'center',
  },

  bottom: {
    alignItems: 'center',
  },

});

export default styles;

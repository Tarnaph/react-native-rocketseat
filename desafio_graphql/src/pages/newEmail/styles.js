import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: metrics.basePadding,
  },

  top: {
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    height: metrics.screenHeight / 6,
    maxHeight: 120,
  },

  inputTop: {
    height: metrics.screenHeight / 18,
    width: metrics.sreenWidth,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 30,
    marginVertical: metrics.smallMargin / 2,
    color: colors.dark,
    paddingHorizontal: metrics.basePadding,
  },

  inputMedium: {
    width: metrics.sreenWidth,
    marginVertical: metrics.smallMargin,
    color: colors.dark,
    paddingHorizontal: metrics.basePadding,
  },

  btn: {
    backgroundColor: colors.blue,
    height: metrics.screenHeight / 18,
    width: metrics.sreenWidth,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    marginBottom: metrics.smallMargin,
  },

  btnTitle: {
    fontSize: fonts.regular,
    color: colors.white,
  }

});

export default styles;

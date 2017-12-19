import { StyleSheet, Platform } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.alfa,
    justifyContent: 'center',
  },

  box: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    maxHeight: 160,
    width: 280,
    borderRadius: 5,
    padding: 20,
  },

  headerModal: {

  },

  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: colors.dark,
    fontSize: fonts.big,
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.light,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 15,
  },

  footerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
export default styles;

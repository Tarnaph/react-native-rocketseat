import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 20,
    height: 80,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  headerTitle: {
    flex: 1,
  },
  rightHeader: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    backgroundColor: colors.lowLight,
    borderRadius: 5,
    height: 40,
    fontSize: fonts.small,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: colors.darker,
  },
  button: {
    fontSize: fonts.medium,
    color: colors.darker,
  },
});

export default styles;
